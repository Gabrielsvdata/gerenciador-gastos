import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTx } from "../context/TransactionsContext";
import styles from "./CategoryPieChart.module.scss";

const COLORS = ["#00C49F", "#FF6B6B", "#0088FE", "#FFBB28", "#AF19FF", "#FF4444"];

export default function CategoryPieChart() {
  const { tx } = useTx();
  const gastos = tx.filter((t) => t.tipo === "saida");

  const data = gastos.reduce((acc, cur) => {
    const item = acc.find((i) => i.name === cur.categoria);
    if (item) item.value += cur.valor;
    else acc.push({ name: cur.categoria, value: cur.valor });
    return acc;
  }, []);

  return (
    <section className={styles.card}>
      <h2>Distribuição de Gastos</h2>
      {data.length === 0 ? (
        <p className={styles.vazio}>Nenhum gasto registrado</p>
      ) : (
        <PieChart width={280} height={220}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" />
        </PieChart>
      )}
    </section>
  );
}
