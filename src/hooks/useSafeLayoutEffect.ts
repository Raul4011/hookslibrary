import React from "react"

export const canUseDom = typeof window !== 'undefined'

export const useSafeLayoutEffect = canUseDom ? React.useLayoutEffect : React.useEffect