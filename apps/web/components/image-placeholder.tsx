import { cn } from "@workspace/ui/lib/utils"

export function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-md bg-primary",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full text-primary-foreground/35"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}
