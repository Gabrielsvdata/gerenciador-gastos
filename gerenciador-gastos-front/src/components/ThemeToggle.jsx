import { useTheme } from "../context/ThemeContext";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#e0e0e0" : "#444",
        width: "2.2rem", height: "2.2rem", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: "1.2rem", borderRadius: "8px"
      }}
      title="Alternar tema"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
