import { Home, ShoppingCart, Layers, Heart, Settings } from "lucide-react"

import { Card } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const NAV_ITEMS = [
  { label: "Home", icon: Home, active: true },
  { label: "Cart", icon: ShoppingCart, active: false },
  { label: "Collections", icon: Layers, active: false },
  { label: "Wishlist", icon: Heart, active: false },
  { label: "Settings", icon: Settings, active: false },
]

export function Sidebar() {
  return (
    <Card className="flex h-fit w-64 shrink-0 flex-col justify-between gap-16 rounded-2xl p-4 py-6">
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
            )}
          >
            <Icon className="size-[18px]" />
            {label}
          </a>
        ))}
      </nav>

      <div className="px-4 text-xs text-muted-foreground">
        <p>planted © 2025</p>
        <p>
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>{" "}
          •{" "}
          <a href="#" className="hover:text-primary">
            Terms and Conditions
          </a>
        </p>
      </div>
    </Card>
  )
}
