
import {act,renderHook} from '@testing-library/react'
import {describe,expect,it} from 'vitest'

import { useToogle } from '../useToogle'


describe('useToogle()',()=>{
    it('should return false when ejecute the hook',()=>{

        const {result} = renderHook(()=>useToogle())

        expect(result.current.value).toBe(false)

    })
    it('should toogle from true to false',()=>{
        const {result} = renderHook(()=>useToogle(true))
        act(()=>{
            result.current.toogle()
        })
        //console.log(result);
        expect(result.current.value).toBe(false)
    })
    it('should toogle multiple times',()=>{
        const {result} = renderHook(()=>useToogle(true))

        act(()=>{
            result.current.toogle()
            result.current.toogle()
            result.current.toogle()
        })
        expect(result.current.value).toBe(false)
    })
})