import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "../context/ThemeContext";
import { useTx } from "../context/TransactionsContext";

export default function SpendingChart() {
  // dados já existentes
  const { tx } = useTx();
  const { theme } = useTheme();

  // agrupa por descrição (ou categoria) e soma valores
  const data = tx.map((t) => ({
    categoria: t.descricao,
    valor: t.tipo === "saida" ? -t.valor : t.valor,
  }));

  // cores dinâmicas
  const barColor = "#22c55e";
  const textColor = theme === "dark" ? "#ccc" : "#333";
  const gridColor = theme === "dark" ? "#333" : "#e0e0e0";

  return (
    <div className="card" style={{ height: 300 }}>
      <h2 style={{ marginBottom: "1rem" }}>Fluxo de Caixa</h2>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid stroke={gridColor} strokeDasharray="4 4" />
          <XAxis dataKey="categoria" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip
            wrapperStyle={{
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            }}
            contentStyle={{
              backgroundColor: theme === "dark" ? "#2a2a2a" : "#ffffff",
              border: "none",
            }}
            labelStyle={{ color: textColor }}
            itemStyle={{ color: textColor }}
          />
          {/* Barras arredondadas, animação suave */}
          <Bar dataKey="valor" fill={barColor} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
