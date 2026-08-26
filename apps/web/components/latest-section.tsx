import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { SectionHeading } from "./section-heading"
import { ImagePlaceholder } from "./image-placeholder"

const LATEST_ITEMS = [
  {
    id: 1,
    title: "How to design a logo in 5 steps",
    author: "Vince Ermino",
  },
  {
    id: 2,
    title: "The Importance of UX Design in Business",
    author: "John Smith",
  },
  {
    id: 3,
    title: "How to design a logo in 5 steps",
    author: "Vince Ermino",
  },
  {
    id: 4,
    title: "Top 5 Strategies for Selling Industrial Chemicals",
    author: "Dr. Alan Reed",
  },
  {
    id: 5,
    title: "Understanding Chemical Distribution Channels",
    author: "Maria Lopez",
  },
  {
    id: 6,
    title: "How to Market Specialty Chemicals Effectively",
    author: "Chen Wei",
  },
  {
    id: 7,
    title: "Safety and Compliance in Chemical Sales",
    author: "Sarah Kim",
  },
  {
    id: 8,
    title: "Optimizing Your Chemical Inventory Management",
    author: "David Park",
  },
]

export function LatestSection() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>Latest Articles</SectionHeading>

      <div className="flex items-center gap-3">
        <Input
          placeholder="What are you looking for?"
          className="h-11 rounded-full bg-muted px-5"
        />
        <Button className="h-11 shrink-0 rounded-full px-8">Search</Button>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
        {LATEST_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <ImagePlaceholder />

            <div>
              <p className="text-sm leading-snug font-semibold">{item.title}</p>
              <p className="text-xs text-muted-foreground">
                By{" "}
                <a href="#" className="text-primary hover:underline">
                  {item.author}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
