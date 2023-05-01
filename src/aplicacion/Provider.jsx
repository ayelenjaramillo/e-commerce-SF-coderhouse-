import { createContext, useState, useContext } from "react";

export const AppContext = createContext();
export const MiContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [contador, setContador] = useState(0);
  return (
    <AppContext.Provider value={[contador, setContador]}>
      {children}
    </AppContext.Provider>
  );
};
export default Provider;
