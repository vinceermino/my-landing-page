import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"

import { HeroSection } from "@/components/hero-section"

afterEach(() => {
  cleanup()
})

describe("HeroSection", () => {
  test("renders the subtitle", () => {
    render(<HeroSection />)
    expect(screen.getByText("Indoor Plant Shop")).toBeInTheDocument()
  })

  test("renders the heading text", () => {
    render(<HeroSection />)
    expect(screen.getByText(/Bring Nature/)).toBeInTheDocument()
  })

  test("renders the description paragraph", () => {
    render(<HeroSection />)
    expect(
      screen.getByText(
        /Discover our curated collection of beautiful indoor plants/
      )
    ).toBeInTheDocument()
  })

  test("renders the call-to-action buttons", () => {
    render(<HeroSection />)
    expect(screen.getByText("Shop Now")).toBeInTheDocument()
    expect(screen.getByText("Care Guides")).toBeInTheDocument()
  })
})
