import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useLiveRef } from '../useLiveRef'

describe('useLiveRef', () => {
    it('should update the ref when the value changes', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useLiveRef(value),
            {
                initialProps: {
                    value: 42,
                },
            }
        )

        expect(result.current.current).toBe(42)

        rerender({
            value: 100,
        })

        expect(result.current.current).toBe(100)
    })
})