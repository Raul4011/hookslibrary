import React from "react"
import {type AnyFunction,debounce,type DebouncedFunction,} from "ts-utils-kit"

import { useEvent } from "./useEvent"


export function useDebounce<T extends AnyFunction>(fn: T,delay: number): DebouncedFunction<T> {

    const event = useEvent(fn)

    return React.useMemo(
        () => debounce(event, delay),
        [event, delay]
    )
}


