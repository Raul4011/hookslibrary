import { act,renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { useEvent } from "../useEvent"


describe("useEvent", () => {

  it("should call the callback with arguments", () => {
    const callback = vi.fn()

    const { result } = renderHook(() => useEvent(callback))

    act(() => {
      result.current("hello")
    })

    expect(callback).toHaveBeenCalledWith("hello")
    expect(callback).toHaveBeenCalledTimes(1)
  })


  it("should keep the same function reference between renders", () => {
    const callback = vi.fn()

    const { result, rerender } = renderHook(
      () => useEvent(callback)
    )

    const firstReference = result.current

    rerender()

    expect(result.current).toBe(firstReference)
  })


  it("should call the latest callback after rerender", () => {
    const firstCallback = vi.fn(() => "first")
    const secondCallback = vi.fn(() => "second")

    let callback = firstCallback

    const { result, rerender } = renderHook(
      () => useEvent(callback)
    )

    act(() => {
      expect(result.current()).toBe("first")
    })


    callback = secondCallback

    rerender()


    act(() => {
      expect(result.current()).toBe("second")
    })

    expect(firstCallback).toHaveBeenCalledTimes(1)
    expect(secondCallback).toHaveBeenCalledTimes(1)
  })

})