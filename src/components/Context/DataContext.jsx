import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isFiltersModal, setIsFilterModal] = useState(false);

  return (
    <DataContext.Provider value={{ isFiltersModal, setIsFilterModal }}>
      {children}
    </DataContext.Provider>
  );
};
