import { fireEvent, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, type MockInstance, vi } from 'vitest'

import { useWindowResize } from '../useWindowResize'


describe('useWindowResize', () => {
    let addEventListenerSpy: MockInstance
    let removeEventListenerSpy: MockInstance

    beforeEach(() => {
        addEventListenerSpy = vi.spyOn(window, 'addEventListener')
        removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('should update windows size on resize', () => {



        const { result } = renderHook(() => useWindowResize())

        const initialState = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        expect(result.current).toEqual(initialState)

        fireEvent(window, new Event('resize'))
        globalThis.innerHeight = 1024
        globalThis.innerWidth = 600

        expect(result.current).toEqual(initialState)

    })

    it('should add and remove event listener on mount and unmount', () => {
        const { unmount } = renderHook(() => useWindowResize())

        expect(addEventListenerSpy).toHaveBeenCalledWith(
            'resize',
            expect.any(Function)
        )

        unmount()

        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            'resize',
            expect.any(Function)
        )
    })

})