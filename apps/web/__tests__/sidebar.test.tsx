import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"

import { Sidebar } from "@/components/sidebar"

afterEach(() => {
  cleanup()
})

describe("Sidebar", () => {
  test("renders all navigation items", () => {
    render(<Sidebar />)
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Cart")).toBeInTheDocument()
    expect(screen.getByText("Collections")).toBeInTheDocument()
    expect(screen.getByText("Wishlist")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
  })

  test("renders the copyright text", () => {
    render(<Sidebar />)
    expect(screen.getByText("planted © 2025")).toBeInTheDocument()
  })

  test("renders the footer links", () => {
    render(<Sidebar />)
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument()
    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument()
  })
})
