import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "mine-a-dope-shop",
  description: "A shadcn/ui + Next.js storefront dashboard.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  )
}
