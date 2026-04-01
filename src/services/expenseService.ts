import type { Expense } from '../@types/expense';

// Simulação de banco de dados (Mock)
const MOCK_EXPENSES: Expense[] = [
  {
    id: '1',
    merchant: 'Amazon Web Services',
    amount: 1200.50,
    currency: 'USD',
    category: 'Services',
    status: { type: 'APPROVED', approvedBy: 'Marcelo Rodrigues', updatedAt: '2025-03-20' }
  },
  {
    id: '2',
    merchant: 'Uber Trip',
    amount: 45.90,
    currency: 'BRL',
    category: 'Transport',
    status: { type: 'PENDING', submittedAt: '2025-03-25' }
  },
  {
    id: '3',
    merchant: 'Starbucks',
    amount: 12.00,
    currency: 'EUR',
    category: 'Food',
    status: { type: 'REJECTED', reason: 'Missing receipt attachment', updatedAt: '2025-03-22' }
  }
];

// Simulando uma chamada de API assíncrona
export const getExpenses = async (): Promise<Expense[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_EXPENSES);
    }, 800); // Simula latência de rede
  });
};