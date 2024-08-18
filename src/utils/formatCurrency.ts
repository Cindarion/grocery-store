const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD", 
  style: "currency",
});

export function formatCurrency(number: number): string {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Invalid input: number must be a valid number');
  };
  return CURRENCY_FORMATTER.format(number);
};