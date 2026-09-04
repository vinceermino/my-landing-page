import Image from "next/image"
import { Button } from "@workspace/ui/components/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-8 py-16 lg:grid-cols-2 lg:py-24">
        {/* Text content */}
        <div className="flex flex-col gap-6 text-primary-foreground">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
              Indoor Plant Shop
            </p>
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
              Bring Nature
              <br />
              Into Your Home
            </h1>
            <p className="max-w-md text-lg leading-relaxed opacity-80">
              Discover our curated collection of beautiful indoor plants,
              hand-picked for every space and skill level.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 text-sm font-semibold"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Care Guides
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl lg:ml-auto">
          <Image
            src="/monstera-deliciosa.jpg"
            alt="Monstera Deliciosa — our featured plant"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
