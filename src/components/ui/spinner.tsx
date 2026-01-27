import * as React from "react"
import { Loader2Icon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva("animate-spin text-muted-foreground", {
  variants: {
    size: {
      default: "size-4",
      sm: "size-3",
      lg: "size-6",
      xl: "size-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

function Spinner({
  className,
  size,
  ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
