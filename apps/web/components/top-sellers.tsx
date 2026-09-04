import { SlidersHorizontal } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { SectionHeading } from "./section-heading"

const AVATAR_COLORS = [
  "bg-emerald-700",
  "bg-lime-200 text-lime-800",
  "bg-teal-300 text-teal-900",
  "bg-green-600",
  "bg-emerald-800",
  "bg-green-900",
  "bg-lime-200 text-lime-800",
  "bg-teal-700",
]

const GROWERS = [
  {
    id: 0,
    name: "Lily Chen",
    plantsSold: 154,
    avatarUrl: "./seller1.jpg",
  },
  {
    id: 1,
    name: "Rosa Martinez",
    plantsSold: 98,
    avatarUrl: "./seller2.jpg",
  },
  {
    id: 2,
    name: "Fern Nakamura",
    plantsSold: 210,
    avatarUrl: "./seller3.jpg",
  },
  {
    id: 3,
    name: "Ivy Johansson",
    plantsSold: 67,
    avatarUrl: "./seller4.jpg",
  },
  {
    id: 4,
    name: "Jasmine Okafor",
    plantsSold: 183,
    avatarUrl: "./seller5.jpg",
  },
  {
    id: 5,
    name: "Sage Patel",
    plantsSold: 120,
    avatarUrl: "./seller6.jpg",
  },
  {
    id: 6,
    name: "Basil Thompson",
    plantsSold: 245,
    avatarUrl: "./seller7.jpg",
  },
  {
    id: 7,
    name: "Hazel Kim",
    plantsSold: 76,
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
        Featured Growers
      </SectionHeading>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
        {GROWERS.map((grower, i) => (
          <div key={grower.id} className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={grower.avatarUrl} alt={grower.name} />
              <AvatarFallback className={AVATAR_COLORS[i]}>
                {grower.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{grower.name}</p>
              <p className="text-xs text-muted-foreground">
                {grower.plantsSold} plants sold
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
