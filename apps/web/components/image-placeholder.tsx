import { cn } from "@workspace/ui/lib/utils"
import { Skeleton } from "@workspace/ui/components/skeleton"

export function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <Skeleton
      className={cn(
        "aspect-video w-full overflow-hidden rounded-md",
        className
      )}
    />
  )
}
