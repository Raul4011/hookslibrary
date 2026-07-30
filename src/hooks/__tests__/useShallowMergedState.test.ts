import {act,renderHook} from '@testing-library/react'
import {describe,expect,it} from 'vitest'

import { useShallowMergedState } from '../useShallowMergedState'


describe("useShallowMergedState",()=>{
    it("sholud return initial state",()=>{
        const initialState = {
            name:'',emial:''
        }

        const {result} = renderHook(()=>useShallowMergedState(initialState))

        expect(result.current[0]).toStrictEqual(initialState)


    })
    it("sholud merge the object shallowly",()=>{
        const initialState = {
            name:'',email:''
        }

        const {result} = renderHook(()=>useShallowMergedState(initialState))

        const [,setter] = result.current

        act(()=>{
            setter({email:'raul@gmail.com'})
        })
       
        expect(result.current[0]).toEqual({name:'',email:'raul@gmail.com'})

    })
    
})