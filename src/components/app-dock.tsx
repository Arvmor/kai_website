"use client"

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
      { idx: index - 2, scale: 1.1, translateY: 0 },
      { idx: index - 1, scale: 1.2, translateY: -6 },
      { idx: index, scale: 1.5, translateY: -10 },
      { idx: index + 1, scale: 1.2, translateY: -6 },
      { idx: index + 2, scale: 1.1, translateY: 0 }
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
    <div className="w-auto h-15 rounded-2xl flex justify-center m-6">
      <div className="p-1 w-auto h-full flex items-center justify-center rounded-2xl">
        {apps.map((app, index) => (
          <li key={app.id} className="list-none flex items-center justify-center w-12 h-12 align-bottom transition-all duration-200 origin-bottom hover:mx-3 relative group">
            <div className="absolute -top-18 bg-black/50 text-white/90 h-2.5 px-4 py-2.5 flex items-center justify-center rounded-sm invisible group-hover:visible whitespace-nowrap after:content-[''] after:absolute after:-bottom-2.5 after:w-0 after:h-0 after:border-l-2.5 after:border-r-2.5 after:border-t-2.5 after:border-transparent after:border-t-black/50">
              {app.name}
            </div>
            <Image
              ref={(el) => {
                iconRefs.current[index] = el
              }}
              className="object-cover transition-all duration-200 inline-block rounded-lg"
              width={48}
              height={48}
              src={app.icon}
              alt={app.name}
            />
          </li>
        ))}
      </div>
    </div>
  )
} 