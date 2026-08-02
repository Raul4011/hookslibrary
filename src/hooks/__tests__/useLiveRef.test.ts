import {act,renderHook} from '@testing-library/react'
import {describe,expect,it} from 'vitest'

import { useLiveRef } from '../useLiveRef'  

describe('useLiveRef', () => {
    it('should return a ref object with the initial value', () => {
        const { result ,rerender} = renderHook(() => useLiveRef(42)) 
        expect(result.current).toEqual(42)
        rerender()
        expect(result.current).toEqual(42)
    })
})