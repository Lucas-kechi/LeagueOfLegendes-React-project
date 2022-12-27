import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [ activeFilter, setActiveFilter ] = useState(null);

  const filterContextStates = { activeFilter, setActiveFilter };

  return <FilterContext.Provider value={filterContextStates} >{children}</FilterContext.Provider>
}

export default FilterProvider;
