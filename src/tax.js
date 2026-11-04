export function calculateTax(amount, ratePercent) {
  if (ratePercent < 0) throw new Error('Invalid tax rate');
  return Math.round((amount * ratePercent) / 100);
}
