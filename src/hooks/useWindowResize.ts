import React, { useState } from "react"

import { canUseDom } from "./useSafeLayoutEffect"

interface WindowSize {
    width: number
    height: number
}

export function useWindowResize(): WindowSize {
    if (!canUseDom) throw new Error('cannot use useWindowsResize in a serevr enviroment')
    const [windowSize, setWindowSize] = useState(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
    }))

    React.useEffect(() => {
        const handleResize = (): void => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return windowSize
}