import { useTx } from "../context/TransactionsContext";
import styles from "./TransactionsTable.module.scss";

export default function TransactionsTable() {
  const { tx = [] } = useTx();

  function exportCSV() {
    const header = "Descrição,Valor,Tipo,Categoria\n";
    const rows = tx
      .map((t) => `${t.descricao},${t.valor},${t.tipo},${t.categoria}`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transacoes.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (tx.length === 0) return null;

  return (
    <div className={styles.tableContainer}>
      <div className={styles.headerRow}>
        <h2>Histórico</h2>
        <button className="button" onClick={exportCSV}>Exportar CSV</button>
      </div>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor (R$)</th>
            <th>Tipo</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {tx.map((t, i) => (
            <tr key={i} className={t.tipo === "saida" ? styles.saida : styles.entrada}>
              <td>{t.descricao}</td>
              <td>{t.valor.toFixed(2)}</td>
              <td>{t.tipo}</td>
              <td>{t.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
