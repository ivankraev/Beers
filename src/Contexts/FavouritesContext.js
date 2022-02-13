import React from 'react'
export const FavouritesContext = React.createContext()
export default function FavouritesContextProvider({ children }) {
  const favouritesSet = new Set()
  const [notifications, setNotifications] = React.useState(false)
  const [notificationMessage, setNotificationMessage] = React.useState('')
  const value = {
    favouritesSet,
    notifications,
    setNotifications,
    notificationMessage,
    setNotificationMessage,
  }
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}
