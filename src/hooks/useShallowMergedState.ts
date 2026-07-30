

import { useState } from "react";
import type { AnyFunction } from "ts-utils-kit";

import { useEvent } from "./useEvent";

export function useShallowMergedState<S>(initialState:S):[S,AnyFunction]{
    const [state,setState] = useState(initialState)

    const setter = useEvent(
  ((newState: Partial<S>) => {setState(prev => ({...prev,...newState,}));
  }) as AnyFunction
);

    return [state,setter] as const
}

