import { SlidersHorizontal } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
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

const SELLERS = [
  {
    id: 0,
    name: "John Smith",
    orders: 154,
    avatarUrl: "./seller1.jpg",
  },
  {
    id: 1,
    name: "Emily Johnson",
    orders: 98,
    avatarUrl: "./seller2.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    orders: 210,
    avatarUrl: "./seller3.jpg",
  },
  {
    id: 3,
    name: "Sophia Davis",
    orders: 67,
    avatarUrl: "./seller4.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    orders: 183,
    avatarUrl: "./seller5.jpg",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    orders: 120,
    avatarUrl: "./seller6.jpg",
  },
  {
    id: 6,
    name: "William Anderson",
    orders: 245,
    avatarUrl: "./seller7.jpg",
  },
  {
    id: 7,
    name: "Isabella Taylor",
    orders: 76,
    avatarUrl: "./seller8.jpg",
  },
]

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
            <Avatar className="h-12 w-12">
              <AvatarImage src={seller.avatarUrl} alt={seller.name} />
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
