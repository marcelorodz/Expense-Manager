import { useEffect, useState } from 'react';
import type { Expense } from './@types/expense';
// IMPORTANTE: Verifique se o nome do arquivo na pasta services é exatamente expenseService.ts
import { getExpenses } from './services/expenseService'; 
import { ExpenseTable } from './components/ExpenseTable';
import styles from './styles/dashboard.module.css';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Erro ao carregar despesas:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <main className={styles.dashboardLayout}>
      <header style={{ padding: '0 1rem' }}>
        <h1>Expense Manager</h1>
        <p>Gerenciamento de gastos corporativos</p>
      </header>

      {loading ? (
        <p style={{ padding: '1rem' }}>Carregando dados da API...</p>
      ) : (
        <ExpenseTable expenses={expenses} />
      )}
    </main>
  );
}

export default App;