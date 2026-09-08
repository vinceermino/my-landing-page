import { expect, test, describe, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/react"

import { SectionHeading } from "@/components/section-heading"

afterEach(() => {
  cleanup()
})

describe("SectionHeading", () => {
  test("renders the heading text passed as children", () => {
    render(<SectionHeading>Test Heading</SectionHeading>)
    expect(screen.getByText("Test Heading")).toBeInTheDocument()
  })

  test("renders the action element when provided", () => {
    render(
      <SectionHeading action={<button>View All</button>}>
        My Section
      </SectionHeading>
    )
    expect(screen.getByText("My Section")).toBeInTheDocument()
    expect(screen.getByText("View All")).toBeInTheDocument()
  })
})
