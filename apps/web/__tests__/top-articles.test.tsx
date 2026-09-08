import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"

import { TopArticles } from "@/components/top-articles"

afterEach(() => {
  cleanup()
})

describe("TopArticles", () => {
  test("renders the section heading", () => {
    render(<TopArticles />)
    expect(screen.getByText("Plant Care Guides")).toBeInTheDocument()
  })

  test("renders all article titles", () => {
    render(<TopArticles />)
    expect(
      screen.getByText("The Beginner's Guide to Monstera Care")
    ).toBeInTheDocument()
    expect(
      screen.getByText("How to Water Your Indoor Plants Properly")
    ).toBeInTheDocument()
    expect(
      screen.getByText("Best Low-Light Plants for Your Apartment")
    ).toBeInTheDocument()
    expect(
      screen.getByText("Repotting 101: When & How to Repot")
    ).toBeInTheDocument()
  })

  test("renders all author names", () => {
    render(<TopArticles />)
    expect(screen.getByText("Lily Chen")).toBeInTheDocument()
    expect(screen.getByText("Rosa Martinez")).toBeInTheDocument()
    expect(screen.getByText("Fern Nakamura")).toBeInTheDocument()
    expect(screen.getByText("Sage Patel")).toBeInTheDocument()
  })
})
