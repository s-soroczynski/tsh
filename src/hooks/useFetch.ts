import { useEffect, useState } from 'react';
import axios from 'axios'
import { UseFetchResponseInterface } from './useFetchResponse.interface'

export function useFetch<T>(url: string): UseFetchResponseInterface<T> {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true)
    axios.get(url, {
      cancelToken: source.token
    })
      .then(({ data }) => {
        setError(null)
        if (data && data.items && data.items.length > 0) {
          setResponse(data)
        } else {
          setResponse(null)
        }
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
    return () => {
      source.cancel()
    }
  }, [url])

  return {
    response,
    loading,
    error,
  }
}