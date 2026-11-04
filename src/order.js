import { subtotal } from './cart.js';
import { discountAmount } from './discount.js';
import { calculateTax } from './tax.js';
import { shippingCost } from './shipping.js';

export function createOrder({ cart, discount, taxRate = 0 }) {
  if (cart.length === 0) throw new Error('Cart is empty');
  const itemsTotal = subtotal(cart);
  const discountTotal = discountAmount(itemsTotal, discount);
  const taxable = itemsTotal - discountTotal;
  const tax = calculateTax(taxable, taxRate);
  const shipping = shippingCost(taxable);
  return { itemsTotal, discountTotal, tax, shipping, total: taxable + tax + shipping };
}
