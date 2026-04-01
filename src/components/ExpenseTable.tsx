import type { Expense } from '../@types/expense';
import { formatCurrency } from '../utils/formatters';
import styles from '../styles/dashboard.module.css'; // Importando o CSS que você já criou

interface Props {
  expenses: Expense[];
}

export const ExpenseTable = ({ expenses }: Props) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table} role="grid">
        <thead>
          <tr>
            <th scope="col">Estabelecimento</th>
            <th scope="col">Categoria</th>
            <th scope="col">Valor</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>
                <strong>{expense.merchant}</strong>
              </td>
              <td>{expense.category}</td>
              <td>{formatCurrency(expense.amount, expense.currency)}</td>
              <td>
                {/* Lógica de renderização condicional baseada no status */}
                <span className={`${styles.badge} ${styles[expense.status.type.toLowerCase()]}`}>
                  {expense.status.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};