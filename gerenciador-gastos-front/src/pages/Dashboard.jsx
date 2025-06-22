import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import ResumoMensal from "../components/ResumoMensal";
import TransactionForm from "../components/TransactionForm";
import TransactionsTable from "../components/TransactionsTable";
import SpendingChart from "../components/SpendingChart";
import CategoryPieChart from "../components/CategoryPieChart";
import SuggestionsCard from "../components/SuggestionsCard";
import "../styles/dashboard.scss";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="container dashboard-layout">
        <section className="main-area">
          <div className="top-row">
            <BalanceCard />
            <ResumoMensal />
          </div>

          <TransactionForm />

          <div className="middle-row">
            <SpendingChart />
            <CategoryPieChart />
          </div>

          <TransactionsTable />
        </section>

        <aside className="sidebar">
          <SuggestionsCard />
        </aside>
      </main>
    </>
  );
}