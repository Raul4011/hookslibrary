import {useState} from "react"

interface toogle {
    value:boolean
    toogle:()=>void
}


export const useToogle=(initialValue:boolean=false):toogle =>{
    
    const [value,setValue] = useState(initialValue)

    const toogle = () =>{
        setValue(value=>!value)
    }

    return {value,toogle} 

}