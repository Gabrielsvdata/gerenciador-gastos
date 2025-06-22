import { useState } from "react";
import { useTx } from "../context/TransactionsContext";
import styles from "./TransactionForm.module.scss";

export default function TransactionForm() {
  const { add } = useTx();

  const [f, setF] = useState({
    descricao: "",
    valor: "",
    tipo: "entrada",
    categoria: "Alimentacao",
  });

  const cats = [
    "Alimentacao",
    "Transporte",
    "Moradia",
    "Educacao",
    "Saude",
    "Lazer",
    "Salario",
  ];

  const handle = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    add({ ...f, valor: parseFloat(f.valor) });
    setF({ ...f, descricao: "", valor: "" });
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <h2>Nova Transação</h2>
      <input
        name="descricao"
        placeholder="Descrição"
        value={f.descricao}
        onChange={handle}
        required
      />
      <input
        type="number"
        name="valor"
        placeholder="Valor"
        value={f.valor}
        onChange={handle}
        required
      />
      <select name="tipo" value={f.tipo} onChange={handle}>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      <select name="categoria" value={f.categoria} onChange={handle}>
        {cats.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <button type="submit">Salvar</button>
    </form>
  );
}
