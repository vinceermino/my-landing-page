import { FlaskConical, Beaker, TestTube, Atom } from "lucide-react"
import { SectionHeading } from "./section-heading"

const ARTICLES = [
  {
    id: 1,
    icon: FlaskConical,
    title: "Top 5 Strategies for Selling Industrial Chemicals",
    author: "Dr. Alan Reed",
  },
  {
    id: 2,
    icon: Beaker,
    title: "Understanding Chemical Distribution Channels",
    author: "Maria Lopez",
  },
  {
    id: 3,
    icon: TestTube,
    title: "How to Market Specialty Chemicals Effectively",
    author: "Chen Wei",
  },
  {
    id: 4,
    icon: Atom,
    title: "Safety and Compliance in Chemical Sales",
    author: "Sarah Kim",
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
