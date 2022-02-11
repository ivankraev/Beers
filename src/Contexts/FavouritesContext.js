import React from 'react'
export const FavouritesContext = React.createContext()
export default function FavouritesContextProvider({ children }) {
  const favouritesSet = new Set()

  const value = {
    favouritesSet,
  }
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}
