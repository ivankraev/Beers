import React from "react";
import { useState } from "react";
export const SearchContext = React.createContext();
export default function SearchContextProvider({ children }) {
    const [search, setSearch] = useState('');
    const [searchedBeers, setSearchedBeers] = useState([]);
    const value = {
        search,
        setSearch,
        searchedBeers,
        setSearchedBeers
    }
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )

}