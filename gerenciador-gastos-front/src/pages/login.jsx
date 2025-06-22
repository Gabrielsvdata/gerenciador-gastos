import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ThemeToggle from "../components/ThemeToggle";
import HeroImage from "../assets/finance-hero.jpg";   // coloque um SVG ou PNG aqui
import "../styles/login.scss";

export default function Login() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  function entrar() {
    if (!nome.trim()) return;
    localStorage.setItem("nome", nome.trim());
    navigate("/dashboard");
  }

  return (
    <main className="login-page">
      {/* Seção de destaque / hero */}
      <section className="hero">
        <header>
          <h1>Gerencie seu dinheiro<br />com confiança</h1>
          <p>
            Acompanhe entradas, saídas e metas de economia em um só lugar.
            Tudo simples, visual e grátis.
          </p>
        </header>

        <figure>
          <img src={HeroImage} alt="Ilustração de finanças" />
        </figure>
      </section>

      {/* Card de login */}
      <section className="login-card" aria-labelledby="titulo-login">
        <h2 id="titulo-login">Bem-vindo ao seu Gerenciador de Gastos</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            entrar();
          }}
        >
          <label htmlFor="nome">Digite seu nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Ex: Gabriel"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            autoComplete="given-name"
          />

          <button type="submit" disabled={!nome.trim()} className="btn-primary">
            Entrar
          </button>
        </form>

        <footer>
          <ThemeToggle />
        </footer>
      </section>
    </main>
  );
}
