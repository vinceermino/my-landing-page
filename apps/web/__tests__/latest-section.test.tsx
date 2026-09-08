import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"

import { LatestSection } from "@/components/latest-section"

afterEach(() => {
  cleanup()
})

describe("LatestSection", () => {
  test("renders the section heading", () => {
    render(<LatestSection />)
    expect(screen.getByText("New Arrivals")).toBeInTheDocument()
  })

  test("renders the search button", () => {
    render(<LatestSection />)
    expect(screen.getByText("Search")).toBeInTheDocument()
  })

  test("renders all plant names", () => {
    render(<LatestSection />)
    expect(screen.getByText("Monstera Deliciosa")).toBeInTheDocument()
    expect(screen.getByText("Fiddle Leaf Fig")).toBeInTheDocument()
    expect(screen.getByText("Snake Plant")).toBeInTheDocument()
    expect(screen.getByText("Pothos Golden")).toBeInTheDocument()
    expect(screen.getByText("Peace Lily")).toBeInTheDocument()
    expect(screen.getByText("Rubber Plant")).toBeInTheDocument()
    expect(screen.getByText("String of Pearls")).toBeInTheDocument()
    expect(screen.getByText("ZZ Plant")).toBeInTheDocument()
  })

  test("renders all plant prices", () => {
    render(<LatestSection />)
    expect(screen.getByText("$45")).toBeInTheDocument()
    expect(screen.getByText("$65")).toBeInTheDocument()
    expect(screen.getByText("$28")).toBeInTheDocument()
    expect(screen.getByText("$18")).toBeInTheDocument()
    expect(screen.getByText("$32")).toBeInTheDocument()
    expect(screen.getByText("$38")).toBeInTheDocument()
    expect(screen.getByText("$22")).toBeInTheDocument()
    expect(screen.getByText("$35")).toBeInTheDocument()
  })

  test("renders all plant categories", () => {
    render(<LatestSection />)
    expect(screen.getByText("Statement Plants")).toBeInTheDocument()
    expect(screen.getByText("Trailing Vines")).toBeInTheDocument()
    expect(screen.getByText("Flowering")).toBeInTheDocument()
    expect(screen.getByText("Succulent")).toBeInTheDocument()
  })
})
