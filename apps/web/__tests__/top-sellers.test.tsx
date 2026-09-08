import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"

import { TopSellers } from "@/components/top-sellers"

afterEach(() => {
  cleanup()
})

describe("TopSellers", () => {
  test("renders the section heading", () => {
    render(<TopSellers />)
    expect(screen.getByText("Featured Growers")).toBeInTheDocument()
  })

  test("renders the filter button", () => {
    render(<TopSellers />)
    expect(screen.getByText("Filter By")).toBeInTheDocument()
  })

  test("renders all grower names", () => {
    render(<TopSellers />)
    expect(screen.getByText("Lily Chen")).toBeInTheDocument()
    expect(screen.getByText("Rosa Martinez")).toBeInTheDocument()
    expect(screen.getByText("Fern Nakamura")).toBeInTheDocument()
    expect(screen.getByText("Ivy Johansson")).toBeInTheDocument()
    expect(screen.getByText("Jasmine Okafor")).toBeInTheDocument()
    expect(screen.getByText("Sage Patel")).toBeInTheDocument()
    expect(screen.getByText("Basil Thompson")).toBeInTheDocument()
    expect(screen.getByText("Hazel Kim")).toBeInTheDocument()
  })

  test("renders plants sold counts", () => {
    render(<TopSellers />)
    expect(screen.getByText("154 plants sold")).toBeInTheDocument()
    expect(screen.getByText("98 plants sold")).toBeInTheDocument()
    expect(screen.getByText("210 plants sold")).toBeInTheDocument()
    expect(screen.getByText("67 plants sold")).toBeInTheDocument()
    expect(screen.getByText("183 plants sold")).toBeInTheDocument()
    expect(screen.getByText("120 plants sold")).toBeInTheDocument()
    expect(screen.getByText("245 plants sold")).toBeInTheDocument()
    expect(screen.getByText("76 plants sold")).toBeInTheDocument()
  })
})
