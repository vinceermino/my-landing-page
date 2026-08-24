import { SlidersHorizontal } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { SectionHeading } from "./section-heading"

const AVATAR_COLORS = [
  "bg-stone-600",
  "bg-zinc-300 text-zinc-700",
  "bg-orange-300 text-orange-900",
  "bg-slate-500",
  "bg-stone-600",
  "bg-zinc-800",
  "bg-zinc-300 text-zinc-700",
  "bg-stone-700",
]

const SELLERS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: "John Smith",
  orders: 154,
}))

export function TopSellers() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        action={
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Filter By
            <SlidersHorizontal className="size-4" />
          </button>
        }
      >
        Top Sellers
      </SectionHeading>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {SELLERS.map((seller, i) => (
          <div key={seller.id} className="flex items-center gap-3">
            <Avatar className="size-11">
              <AvatarFallback className={AVATAR_COLORS[i]}>JS</AvatarFallback>
            </Avatar>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{seller.name}</p>
              <p className="text-xs text-muted-foreground">
                {seller.orders} orders
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
