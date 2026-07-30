
import React from "react"
import {type AnyFunction,throttle,type ThrottledFunction,} from "ts-utils-kit"

import { useEvent } from "./useEvent"

export function useThrottle<T extends AnyFunction>(fn: T,delay: number): ThrottledFunction<T> {

    const event = useEvent(fn)

    return React.useMemo(() => throttle(event, delay),[event, delay])
}


