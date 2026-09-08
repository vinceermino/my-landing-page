import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"

import { TopNav } from "@/components/top-nav"

// Ensure the DOM is cleaned up after each test so elements don't stack up
afterEach(() => {
  cleanup()
})

describe("TopNav", () => {
  test("renders the brand logo", () => {
    render(<TopNav />)
    expect(screen.getByText("planted.")).toBeInTheDocument()
  })

  test("renders navigation links", () => {
    render(<TopNav />)
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Shop")).toBeInTheDocument()
    expect(screen.getByText("Collections")).toBeInTheDocument()
    expect(screen.getByText("Care Guides")).toBeInTheDocument()
  })

  test("renders user profile name", () => {
    render(<TopNav />)
    expect(screen.getByText("Vince Ermino")).toBeInTheDocument()
  })
})
