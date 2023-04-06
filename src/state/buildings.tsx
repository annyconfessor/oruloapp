import React, { createContext, useState, useContext, useEffect } from 'react'

import { getBuildings } from '../services/api.ts'

interface IBuildingsContext {
  meta: any
  isLoading: boolean
  buildings: string[]
  addFavorite: (item: string) => void
  setPage: (page: number) => void
}

const DEFAULT_VALUE = {
  meta: {
    page: 1
  },
  loading: false,
  buildings: [] as IBuildingsContext['buildings'],
  addFavorite: () => null
}

export const BuildingsContext = createContext<IBuildingsContext>(DEFAULT_VALUE);

export const BuildingsContextProvider: React.FC<IBuildingsContext> = ({ children }) => {
  const [buildings, setBuildings] = useState<any>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [meta, setMeta] = useState(DEFAULT_VALUE.meta)

  useEffect(() => {
    const fetchBuildings = async () => {
      setLoading(true)

      const { data: { buildings, ...rest } } = await getBuildings({ page: meta.page })

      setBuildings(buildings)
      setMeta(rest)
      setLoading(false)
    }

    fetchBuildings()
  }, [meta.page])

  const setPage = (page) => {
    setMeta({ ...meta, page })
  }

  return (
    <BuildingsContext.Provider
      value={{
        meta,
        setPage,
        isLoading,
        buildings
      }}
    >
      {children}
    </BuildingsContext.Provider>
  )
};

const useBuildings = () => useContext(BuildingsContext);

export default useBuildings;