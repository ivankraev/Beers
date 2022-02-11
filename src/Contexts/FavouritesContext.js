import React from "react";
import { useState } from "react";
export const FavouritesContext = React.createContext();
export default function FavouritesContextProvider({ children }) {
    const [favourites, setFavourites] = useState([]);
    const value = {
        favourites,
        setFavourites
    }
    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    )

}