import React, { useState, createContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [sidemenu, setSidemenu] = useState(true);
    const [isFiltersModal, setIsFilterModal] = useState(false);
    console.log(isFiltersModal, ">>>")
  return ( <DataContext.Provider value={{

   isMobile, sidemenu,setSidemenu, isFiltersModal, setIsFilterModal
  }}>
        {children}
    </DataContext.Provider>)
}