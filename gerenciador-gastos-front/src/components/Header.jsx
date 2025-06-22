import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();
  const nome = localStorage.getItem("nome") || "Usuário";

  function sair() {
    localStorage.removeItem("nome");
    navigate("/");
  }

  return (
<header className={styles.header + " card"}>  {/* herda .card para fundo dinâmico */}
  <h1>Gerenciador de Gastos</h1>
  <div className={styles.box}>
    <span>Olá, {nome}</span>
    <ThemeToggle />
    <button onClick={sair}>Sair</button>
  </div>
</header>

  );
}
