import { createContext, useState } from "react";


const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalStateProvider = ({ children }) => {

  const [showCartSidebar, setShowCartSidebar] = useState(false);

  return (
    <GlobalContext.Provider value={{ showCartSidebar, setShowCartSidebar }}>
      {children}
    </GlobalContext.Provider>
  )

}

export default GlobalContext;