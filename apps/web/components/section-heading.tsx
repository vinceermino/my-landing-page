import { Leaf } from "lucide-react"
import type { ReactNode } from "react"

export function SectionHeading({
  children,
  action,
}: {
  children: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-1.5 text-lg font-bold text-primary">
        <Leaf className="size-5 fill-emerald-500 text-emerald-500" />
        {children}
      </h2>
      {action}
    </div>
  )
}
