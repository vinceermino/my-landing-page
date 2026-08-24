import { Card } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"

import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { TopSellers } from "@/components/top-sellers"
import { TopArticles } from "@/components/top-articles"
import { LatestSection } from "@/components/latest-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <TopNav />

      <main className="mx-auto flex w-full max-w-[1440px] flex-1 items-start gap-6 px-8 py-8">
        <Sidebar />

        <div className="flex flex-1 flex-col gap-6">
          <Card className="rounded-2xl p-6">
            <TopSellers />
            <Separator className="my-6" />
            <TopArticles />
          </Card>

          <Card className="rounded-2xl p-6">
            <LatestSection />
          </Card>
        </div>
      </main>
    </div>
  )
}
