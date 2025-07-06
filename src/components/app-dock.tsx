"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface AppIcon {
  id: string
  name: string
  icon: string
  open?: boolean
}

const defaultApps: AppIcon[] = [
  {
    id: "safari",
    name: "Safari",
    icon: "/Safari.png"
  },
  {
    id: "messages",
    name: "Messages",
    icon: "/Messages.png"
  },
  {
    id: "synps",
    name: "Synps",
    icon: "/logo.png",
    open: true
  },
  {
    id: "X",
    name: "X",
    icon: "/X.png"
  },
  {
    id: "Discord",
    name: "Discord",
    icon: "/Discord.png"
  }
]

export function AppDock() {
  const [apps] = useState<AppIcon[]>(defaultApps)
  const iconRefs = useRef<(HTMLImageElement | null)[]>([])

  const resetIcons = () => {
    iconRefs.current.forEach((icon) => {
      if (icon) {
        icon.style.transform = "scale(1) translateY(0px)"
      }
    })
  }

  const focus = (index: number) => {
    resetIcons()
    const transformations = [
      { idx: index - 2, scale: 1.1, translateY: -2 },
      { idx: index - 1, scale: 1.3, translateY: -8 },
      { idx: index, scale: 1.6, translateY: -16 },
      { idx: index + 1, scale: 1.3, translateY: -8 },
      { idx: index + 2, scale: 1.1, translateY: -2 }
    ]

    transformations.forEach(({ idx, scale, translateY }) => {
      if (iconRefs.current[idx]) {
        iconRefs.current[idx]!.style.transform = `scale(${scale}) translateY(${translateY}px)`
      }
    })
  }

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        icon.addEventListener("mouseover", () => focus(index))
        icon.addEventListener("mouseleave", resetIcons)
      }
    })

    return () => {
      iconRefs.current.forEach((icon, index) => {
        if (icon) {
          icon.removeEventListener("mouseover", () => focus(index))
          icon.removeEventListener("mouseleave", resetIcons)
        }
      })
    }
  }, [])

  return (
    <div className="w-auto h-15 flex justify-center m-10">
      <div className="p-2 w-auto h-full flex items-center justify-center space-x-4">
        {apps.map((app, index) => (
          <li key={app.id} className="list-none flex items-center justify-center w-12 h-12 align-bottom transition-all duration-300 ease-out origin-bottom relative group">
            <div className="absolute -top-18 bg-black/50 text-white/90 px-3 py-2 flex items-center justify-center rounded-md invisible group-hover:visible whitespace-nowrap text-sm z-10 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-2 after:border-r-2 after:border-t-2 after:border-transparent after:border-t-black/50">
              {app.name}
            </div>
            <Image
              ref={(el) => {
                iconRefs.current[index] = el
              }}
              className={cn("w-full h-full object-cover transition-all duration-300 ease-out rounded-xl", app.open && "mb-6")}
              width={48}
              height={48}
              src={app.icon}
              alt={app.name}
            />
            {/* Open app indicator */}
            {app.open && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/90 rounded-full"></div>
            )}
          </li>
        ))}
      </div>
    </div>
  )
} 