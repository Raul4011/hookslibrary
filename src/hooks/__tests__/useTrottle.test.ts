import { act,renderHook } from '@testing-library/react'
import {describe ,expect,it, vi} from 'vitest'

import { useThrottle } from '../useThrottle'

describe('useThrottle',()=>{
    it('sholud throttle the callback',()=>{

        const callback = vi.fn()

        const {result}= renderHook(()=>useThrottle(callback,1000))

        act(()=>{
            result.current()
            result.current()
            result.current()
        })
        expect(callback).toHaveBeenCalledOnce()
        vi.advanceTimersByTime(1_200)
        act(()=>{
            result.current()
            result.current()
            result.current()
        })
        expect(callback).toHaveBeenCalledTimes(2)
    })
})