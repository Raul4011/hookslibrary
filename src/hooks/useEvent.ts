import React from "react"
import { type AnyFunction } from "ts-utils-kit"

export function useEvent<T extends AnyFunction>(callback: T): T {
    const ref = React.useRef<T>(callback)

    React.useEffect(() => {
        ref.current = callback
    }, [callback])

    const handler = React.useCallback(
        (...args: Parameters<T>) => ref.current(...args),
        []
    )

    return handler as T
}