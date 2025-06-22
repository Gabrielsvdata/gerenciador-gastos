import styles from "./SuggestionsCard.module.scss";
import { postSugestoes } from "../services/api";
import { useState } from "react";
import { useTx } from "../context/TransactionsContext";

export default function SuggestionsCard() {
  const { tx } = useTx();
  const [texto, setTexto] = useState("");
  const gerar = async () => {
    const { data } = await postSugestoes({ tx });
    setTexto(data.sugestao);
  };

  return (
    <div className={styles.card}>
      <h2>Sugestões Inteligentes</h2>
      <p>Com base nos seus dados, veja como pode otimizar seus gastos:</p>
      <button onClick={gerar}>Gerar Sugestões</button>
      {texto && <p className={styles.resultado}>{texto}</p>}
    </div>
  );
}
