//contador que tiene 2 propiedades y un metodo

import * as React from 'react'

interface useCounterProps {
    initialValue?: number
}
interface UseCounter {
    increment:(value?:number)=>void
    decrement:(value?:number)=>void
    counter:number
}

export const useCounter = ({initialValue = 0}:useCounterProps):UseCounter => {

    const [counter,setCounter] = React.useState(initialValue)

    const increment = (num: number=1):void => {
        setCounter((prev)=>prev+num)
    }
    const decrement =(num: number=1) =>{
        setCounter(prev=>prev-num)
    }

    return {increment,decrement,counter}
}

