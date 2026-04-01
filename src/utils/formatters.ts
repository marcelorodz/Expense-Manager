/**
 * Utilitário para formatar valores monetários de forma global.
 * Atende ao requisito: "Internationalized and localized UI flows".
 */
export const formatCurrency = (value: number, currency: 'USD' | 'BRL' | 'EUR') => {
  const locale = currency === 'BRL' ? 'pt-BR' : currency === 'EUR' ? 'de-DE' : 'en-US';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString));
};