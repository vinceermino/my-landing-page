import { Palette, MousePointerClick } from "lucide-react"

import { SectionHeading } from "./section-heading"

const ARTICLES = [
  {
    id: 1,
    icon: Palette,
    title: "How to design in a logo in 5 steps",
    author: "Vince Ermino",
  },
  {
    id: 2,
    icon: MousePointerClick,
    title: "The Importance of UX Design in Business",
    author: "John Smith",
  },
  {
    id: 3,
    icon: Palette,
    title: "How to design in a logo in 5 steps",
    author: "Vince Ermino",
  },
  {
    id: 4,
    icon: MousePointerClick,
    title: "The Importance of UX Design in Business",
    author: "John Smith",
  },
]

export function TopArticles() {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading>Top Articles</SectionHeading>

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        {ARTICLES.map(({ id, icon: Icon, title, author }) => (
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
