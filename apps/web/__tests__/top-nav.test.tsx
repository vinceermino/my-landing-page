import { expect, test } from "vitest"
import { render, screen } from "@testing-library/react"

import { TopNav } from "@/components/top-nav"

test("TopNav renders the brand logo", () => {
  render(<TopNav />)
  expect(screen.getByRole("link", { name: "planted." })).toBeDefined()
})
