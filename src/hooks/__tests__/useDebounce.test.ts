import {act,renderHook} from "@testing-library/react"
import {describe,expect,it,vi} from "vitest"

import { useDebounce } from "../useDebounce"

describe("useDebounce()",()=>{
    it("should execute the callback after delay",()=>{

        vi.useFakeTimers()

        const callback = vi.fn()

        const {result} = renderHook(()=>useDebounce(callback,500))

        act(()=>{
            result.current()
            result.current()
            result.current()
        })

        expect(callback).toHaveBeenCalledTimes(0)

        act(()=>{

            vi.advanceTimersByTime(500)
        })
        

        expect(callback).toHaveBeenCalledTimes(1)

    })

})