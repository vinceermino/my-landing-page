import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Planted — Indoor Plant Shop",
  description:
    "Discover and shop beautiful indoor plants, care guides, and more.",
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
