import { useTx } from "../context/TransactionsContext";
import styles from "./ResumoMensal.module.scss";

export default function ResumoMensal() {
  const { tx = [] } = useTx();
  const entradas = tx.filter(t => t.tipo === "entrada").reduce((s, t) => s + t.valor, 0);
  const saidas   = tx.filter(t => t.tipo === "saida").reduce((s, t) => s + t.valor, 0);
  const saldo    = entradas - saidas;

  return (
    <section className={styles.card}>
      <h2>Resumo Mensal</h2>
      <p><strong>Entradas:</strong> R$ {entradas.toFixed(2)}</p>
      <p><strong>Saídas:</strong>   R$ {saidas.toFixed(2)}</p>
      <p className={saldo>=0?styles.pos:styles.neg}><strong>Saldo:</strong>     R$ {saldo.toFixed(2)}</p>
    </section>
  );
}
