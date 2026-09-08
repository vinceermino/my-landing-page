import { expect, test, describe, afterEach } from "vitest"
import { render, cleanup } from "@testing-library/react"

import { ImagePlaceholder } from "@/components/image-placeholder"

afterEach(() => {
  cleanup()
})

describe("ImagePlaceholder", () => {
  test("renders without crashing", () => {
    const { container } = render(<ImagePlaceholder />)
    expect(container.firstChild).toBeTruthy()
  })

  test("applies custom className", () => {
    const { container } = render(<ImagePlaceholder className="custom-class" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
