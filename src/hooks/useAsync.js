import { useCallback, useEffect, useRef, useState } from "react"

export function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const isFirstRender = useRef(true);
  const [data, setData] = useState(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return null; // Return null or some initial value on the first render
    }
    return callbackMemoized; // Perform the fetch operation
  });

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setData(undefined)
    setError(undefined)
    callback()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, data }
}