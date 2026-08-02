import {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from 'axios'
import React from 'react'

import { useLiveRef } from './useLiveRef'
import { setCommonHeaders } from './utils/headers'

type MethodAxios = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface ConfigAxios extends AxiosRequestConfig {
  instance: AxiosInstance
  method: MethodAxios
  url: string
  enabled?: boolean
}

interface UseAxiosResult<T> {
  data: T | null
  error: string | null
  loading: boolean
  fetcher: (config?: Partial<ConfigAxios>) => Promise<void>
}

function newAbortSignal(timeout: number): AbortSignal {
  const controller = new AbortController()

  setTimeout(() => {
    controller.abort()
  }, timeout)

  return controller.signal
}

export function useAxios<T>(
  initialConfig: ConfigAxios
): UseAxiosResult<T> {
  const configRef = useLiveRef(initialConfig)

  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const { instance } = configRef.current
    instance.defaults.timeout = 500
    setCommonHeaders(instance)
  }, [configRef])

  const fetcher = React.useCallback(
    async (overrideConfig?: Partial<ConfigAxios>) => {
      const config = {
        ...configRef.current,
        ...overrideConfig,
      }

      const enabled = config.enabled ?? true

      if (!enabled) return

      setLoading(true)
      setError(null)

      try {
        const response = await config.instance.request<T>({
          ...config,
          signal: newAbortSignal(5000),
          headers: {
            ...config.instance.defaults.headers.common,
            ...config.headers,
          },
        })

        setData(response.data)
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.message)
        } else {
          setError('An unexpected error occurred')
        }
      } finally {
        setLoading(false)
      }
    },
    [configRef]
  )

  React.useEffect(() => {
    void fetcher()
  }, [fetcher])

  return {
    data,
    error,
    loading,
    fetcher,
  }
}