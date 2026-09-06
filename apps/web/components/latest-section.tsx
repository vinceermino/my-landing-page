import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { SectionHeading } from "./section-heading"

const NEW_ARRIVALS = [
  {
    id: 1,
    title: "Monstera Deliciosa",
    category: "Tropical",
    price: "$45",
    imageUrl: "/monstera-deliciosa.jpg",
  },
  {
    id: 2,
    title: "Fiddle Leaf Fig",
    category: "Statement Plants",
    price: "$65",
    imageUrl: "/fiddle-leaf-fig.jpg",
  },
  {
    id: 3,
    title: "Snake Plant",
    category: "Low Light",
    price: "$28",
    imageUrl: "/snake-plant.jpg",
  },
  {
    id: 4,
    title: "Pothos Golden",
    category: "Trailing Vines",
    price: "$18",
    imageUrl: "/pothos-golden.jpg",
  },
  {
    id: 5,
    title: "Peace Lily",
    category: "Flowering",
    price: "$32",
    imageUrl: "/peace-lily.jpg",
  },
  {
    id: 6,
    title: "Rubber Plant",
    category: "Tropical",
    price: "$38",
    imageUrl: "/rubber-plant.jpg",
  },
  {
    id: 7,
    title: "String of Pearls",
    category: "Succulent",
    price: "$22",
    imageUrl: "/string-of-pearls.jpg",
  },
  {
    id: 8,
    title: "ZZ Plant",
    category: "Low Light",
    price: "$35",
    imageUrl: "/zz-plant.jpg",
  },
]

export function LatestSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading>New Arrivals</SectionHeading>

      <div className="flex items-center gap-3">
        <Input
          placeholder="Search for plants..."
          className="h-11 rounded-full bg-muted px-5"
        />
        <Button className="h-11 shrink-0 rounded-full px-8">Search</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {NEW_ARRIVALS.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="flex flex-col gap-1.5 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-snug font-semibold">
                  {item.title}
                </p>
                <p className="text-sm font-bold text-primary">{item.price}</p>
              </div>
              <span className="inline-block w-fit rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
