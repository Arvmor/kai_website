import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive backdrop-blur-sm relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-white/15 to-white/10 text-white border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:from-white/25 hover:to-white/15 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
        destructive:
          "bg-gradient-to-r from-red-500/20 to-red-600/15 text-red-200 border border-red-500/30 shadow-[0_8px_32px_rgba(239,68,68,0.2)] hover:from-red-500/30 hover:to-red-600/20 hover:border-red-500/40 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-red-500/20",
        outline:
          "bg-white/5 text-white border border-white/15 shadow-[0_4px_16px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:border-white/25 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-gradient-to-r from-gray-500/20 to-gray-600/15 text-gray-200 border border-gray-500/30 shadow-[0_8px_32px_rgba(107,114,128,0.2)] hover:from-gray-500/30 hover:to-gray-600/20 hover:border-gray-500/40 hover:shadow-[0_8px_32px_rgba(107,114,128,0.3)] hover:scale-[1.02] active:scale-[0.98]",
        ghost:
          "bg-transparent text-white hover:bg-white/10 hover:border-white/20 border border-transparent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        link: "text-blue-300 underline-offset-4 hover:underline bg-transparent hover:text-blue-200 transition-colors",
        glassy:
          "bg-gradient-to-r from-white/20 to-white/10 text-white border border-white/25 shadow-[0_8px_32px_rgba(255,255,255,0.15)] hover:from-white/30 hover:to-white/20 hover:border-white/35 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
        glassyDark:
          "bg-gradient-to-r from-black/30 to-black/20 text-white border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:from-black/40 hover:to-black/30 hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md",
        primary:
          "bg-gradient-to-r from-blue-500/30 to-purple-500/20 text-white border border-blue-400/30 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:from-blue-500/40 hover:to-purple-500/30 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
        neon:
          "bg-gradient-to-r from-cyan-500/20 to-blue-500/15 text-cyan-200 border border-cyan-400/40 shadow-[0_8px_32px_rgba(6,182,212,0.3)] hover:from-cyan-500/30 hover:to-blue-500/25 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400/0 before:via-cyan-400/20 before:to-cyan-400/0 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
      },
      size: {
        default: "h-10 px-6 py-2.5 has-[>svg]:px-5 text-sm font-semibold",
        sm: "h-8 rounded-md gap-1.5 px-4 py-2 has-[>svg]:px-3 text-sm font-medium",
        lg: "h-12 rounded-lg px-8 py-3 has-[>svg]:px-6 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 py-4 text-lg has-[>svg]:px-8 font-bold",
        icon: "size-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
