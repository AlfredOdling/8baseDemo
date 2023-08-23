import { useCallback, useEffect, useState } from 'react'

export const usePersistState = <Type>(key: string, initialState: Type) => {
  const [state, setState] = useState<Type | null>(null)

  const persist = useCallback(async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      localStorage.setItem(key, jsonValue)
    } catch (error) {
      console.error('Writing error: ', error)
    }
  }, [])

  const getData = async () => {
    let value = null
    try {
      const jsonValue = localStorage.getItem(key)
      value = jsonValue !== null ? JSON.parse(jsonValue) : null

      if (value === 'false') {
        value = false
      } else if (value === 'true') {
        value = true
      }
    } catch (error) {
      console.error('Reading error: ', error)
    }
    return value
  }

  // Runs once on mount
  useEffect(() => {
    ;(async () => {
      const value = await getData()
      if (value !== null) {
        setState(value)
      } else {
        setState(initialState)
      }
    })()
  }, [])

  // Persist state when it mutates
  useEffect(() => {
    persist(state)
  }, [state])

  return [state, setState] as const
}
