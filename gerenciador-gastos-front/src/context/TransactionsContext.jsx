import { createContext, useContext, useState } from "react";

const Context = createContext();

export function TxProvider({ children }) {
  const [tx, setTx] = useState([]);
  const add = (t) => setTx((prev) => [...prev, t]);

  return (
    <Context.Provider value={{ tx, add }}>
      {children}
    </Context.Provider>
  );
}

/* hook defensivo: dispara erro se usado fora do Provider */
export const useTx = () => {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useTx deve ser usado dentro de <TxProvider>");
  return ctx;
};
