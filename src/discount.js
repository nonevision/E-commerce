export function discountAmount(subtotal, discount) {
  if (!discount) return 0;
  if (discount.value < 0) throw new Error('Invalid discount');
  if (discount.type === 'percent') {
    if (discount.value > 100) throw new Error('Invalid discount');
    return Math.round((subtotal * discount.value) / 100);
  }
  if (discount.type === 'fixed') return Math.min(discount.value, subtotal);
  throw new Error(`Unknown discount type ${discount.type}`);
}
