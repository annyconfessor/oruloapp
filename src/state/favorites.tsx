import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'

import useLocalStorage from '../hooks/useLocalStorage.tsx'

interface IFavoritesContext {
  favorites: string[]
  handleFavorite: (item: string) => void,
  findFavorite: (id: string) => void
}

const DEFAULT_VALUE = {
  favorites: [] as IFavoritesContext['favorites'],
  handleFavorite: () => null,
  findFavorite: () => null
}

export const FavoritesContext = createContext<IFavoritesContext>(DEFAULT_VALUE);

export const FavoritesContextProvider: React.FC<IFavoritesContext> = ({ children }) => {
  const [favoritesPersisted, setFavoritesPersisted] = useLocalStorage('buildingsFavorites')
  const favoritesPersistedParsed = favoritesPersisted ? JSON.parse(favoritesPersisted) : []
  const [favorites, setFavorites] = useState<string[]>(favoritesPersistedParsed)

  const findFavorite = useCallback((id) => !!favorites.find((favorite) => favorite === id), [favorites])

  const addFavorite = useCallback((id) => {
    setFavorites([ ...favorites, id ])
  }, [favorites])

  const removeFavorite = useCallback((id: string) => {
    setFavorites(favorites.filter((favorite) => favorite !== id))
  }, [favorites])

  const handleFavorite = useCallback((id: string) => {
    const isFavorited = findFavorite(id)

    if (isFavorited) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }, [addFavorite, findFavorite, removeFavorite])

  useEffect(() => {
    const favoritesSerialized = JSON.stringify(favorites)

    setFavoritesPersisted(favoritesSerialized)
  }, [favorites, setFavoritesPersisted])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        handleFavorite,
        findFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
};

const useFavorites = () => useContext(FavoritesContext);

export default useFavorites;