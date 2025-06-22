import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TxProvider } from "./context/TransactionsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TxProvider>
      <App />
    </TxProvider>
  </React.StrictMode>
);
