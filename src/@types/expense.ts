// TypeScript: Discriminated Union
// Isso garante que se o status for 'REJECTED', o código OBRIGA a ter um 'reason'.
export type ExpenseStatus = 
  | { type: 'PENDING'; submittedAt: string }
  | { type: 'APPROVED'; approvedBy: string; updatedAt: string }
  | { type: 'REJECTED'; reason: string; updatedAt: string };

export interface Expense {
  id: string;
  merchant: string;
  amount: number;
  currency: 'USD' | 'BRL' | 'EUR';
  category: 'Travel' | 'Food' | 'Transport' | 'Services';
  status: ExpenseStatus;
}

// TypeScript: Generics para respostas de API (exigência da vaga)
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
}