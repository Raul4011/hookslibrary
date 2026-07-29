import React from "react"
import { type AnyFunction } from "ts-utils-kit"

export function useEvent<T extends AnyFunction>(callback:T):T {

    const ref = React.useRef<AnyFunction| undefined>(()=>{})

    React.useEffect(()=>{
        ref.current = callback
    },[])

    return React.useCallback<AnyFunction>((...args: unknown[]) => ref.current?.(...args),[]) as T
}
