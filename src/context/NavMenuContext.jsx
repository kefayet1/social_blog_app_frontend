import { Children, createContext, useState } from "react";

export const NavMenuContext = createContext();

export const NavMenuContextProvider = ({ children }) => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  return (
    <NavMenuContext.Provider value={{ showLeftMenu, setShowLeftMenu }}>
      {children}
    </NavMenuContext.Provider>
  );
};

