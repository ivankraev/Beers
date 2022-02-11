import React from 'react'
export const FavouritesContext = React.createContext()
export default function FavouritesContextProvider({ children }) {
  const favouritesSet = new Set()
  const [notifications, setNotifications] = React.useState(false)
  const value = {
    favouritesSet,
    notifications,
    setNotifications,
  }
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}
