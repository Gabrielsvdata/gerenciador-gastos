import { useTx } from "../context/TransactionsContext";
import styles from "./BalanceCard.module.scss";

export default function BalanceCard() {
  const { tx = [] } = useTx();
  const total = tx.reduce(
    (sum, t) => (t.tipo === "entrada" ? sum + t.valor : sum - t.valor),
    0
  );

  return (
    <section className={styles.card}>
      <h2>Saldo</h2>
      <p className={total >= 0 ? styles.pos : styles.neg}>
        R$ {total.toFixed(2)}
      </p>
    </section>
  );
}
