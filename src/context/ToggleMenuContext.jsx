import { createContext, useContext, useState } from "react";

const ToggleMenuContext = createContext();

function ToggleMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function toggleMenu() {
    setIsMenuOpen(() => !isMenuOpen);
  }

  return (
    <ToggleMenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}

function useToggleMenu() {
  const context = useContext(ToggleMenuContext);
  if (context === undefined)
    throw new Error("ToggleMenuContext was used outside of ToggleMenuProvider");
  return context;
}

export { ToggleMenuProvider, useToggleMenu };
