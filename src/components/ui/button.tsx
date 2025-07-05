import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 text-white border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30",
        destructive:
          "bg-red-500/20 text-red-200 border border-red-500/30 shadow-lg hover:bg-red-500/30 hover:border-red-500/40 focus-visible:ring-red-500/20",
        outline:
          "bg-white/5 text-white border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20",
        secondary:
          "bg-gray-500/20 text-gray-200 border border-gray-500/30 shadow-lg hover:bg-gray-500/30 hover:border-gray-500/40",
        ghost:
          "bg-transparent text-white hover:bg-white/10 hover:border-white/20 border border-transparent",
        link: "text-blue-300 underline-offset-4 hover:underline bg-transparent",
        glassy:
          "bg-white/10 text-white border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 backdrop-blur-md",
        glassyDark:
          "bg-black/20 text-white border border-white/10 shadow-lg hover:bg-black/30 hover:border-white/20 backdrop-blur-md",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 py-3 text-base has-[>svg]:px-6",
        icon: "size-9",
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
