import React, { createContext, useState, useContext } from 'react';

interface IBuildingsContext {
  favorites: string[]
  addFavorite: (item: string) => void
}

const DEFAULT_VALUE = {
  favorites: [] as IBuildingsContext['favorites'],
  addFavorite: () => null
}

export const BuildingsContext = createContext<IBuildingsContext>(DEFAULT_VALUE);

export const BuildingsContextProvider: React.FC<IBuildingsContext> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([])

  const addFavorite = (item: string) => {
    setFavorites([...favorites, item])
  }

  return (
    <BuildingsContext.Provider
      value={{
        favorites,
        addFavorite
      }}
    >
      {children}
    </BuildingsContext.Provider>
  )
};

const useBuildings = () => useContext(BuildingsContext);

export default useBuildings;