import { Flower2, Droplets, Sun, Sprout } from "lucide-react"
import { SectionHeading } from "./section-heading"

const GUIDES = [
  {
    id: 1,
    icon: Flower2,
    title: "The Beginner's Guide to Monstera Care",
    author: "Lily Chen",
  },
  {
    id: 2,
    icon: Droplets,
    title: "How to Water Your Indoor Plants Properly",
    author: "Rosa Martinez",
  },
  {
    id: 3,
    icon: Sun,
    title: "Best Low-Light Plants for Your Apartment",
    author: "Fern Nakamura",
  },
  {
    id: 4,
    icon: Sprout,
    title: "Repotting 101: When & How to Repot",
    author: "Sage Patel",
  },
]

export function TopArticles() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>Plant Care Guides</SectionHeading>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        {GUIDES.map(({ id, icon: Icon, title, author }) => (
          <div key={id} className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-md bg-primary">
              <Icon className="size-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm leading-snug font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">
                By{" "}
                <a href="#" className="text-primary hover:underline">
                  {author}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
