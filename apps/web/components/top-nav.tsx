// 1. Added AvatarImage to the import statement
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@workspace/ui/components/avatar"
import Link from "next/link"

const NAV_LINKS = ["Home", "Shop", "Collections", "Care Guides"]

export function TopNav() {
  // Replace this string with your actual local image path or remote URL
  // Next.js automatically looks inside the public folder,
  // so you just start with a forward slash "/"
  const profileImageUrl = "/VinceErminoHeadshot.png"

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4">
        <Link href="/" role="link" className="text-lg font-bold">
          planted.
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-lg hover:opacity-90">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-primary-foreground/30" />

          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Vince Ermino</span>
            <Avatar className="h-12 w-12">
              {/* 2. Added AvatarImage component here */}
              <AvatarImage
                className="object-cover"
                src={profileImageUrl}
                alt="Vince Ermino"
              />
              <AvatarFallback className="bg-primary-foreground/15 text-primary-foreground">
                VE
              </AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </div>
    </header>
  )
}
