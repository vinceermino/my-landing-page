import { Card } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"

import { TopNav } from "@/components/top-nav"
import { HeroSection } from "@/components/hero-section"
import { TopSellers } from "@/components/top-sellers"
import { TopArticles } from "@/components/top-articles"
import { LatestSection } from "@/components/latest-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <TopNav />

      <HeroSection />

      <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-8 py-10">
        <Card className="rounded-2xl p-6">
          <LatestSection />
        </Card>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="rounded-2xl p-6">
            <TopSellers />
          </Card>
          <Card className="rounded-2xl p-6">
            <TopArticles />
          </Card>
        </div>
      </main>

      <footer className="border-t bg-card py-8">
        <div className="mx-auto max-w-[1440px] px-8 text-center text-xs text-muted-foreground">
          <p>planted © 2025</p>
          <p className="mt-1">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="#" className="hover:text-primary">
              Terms and Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
