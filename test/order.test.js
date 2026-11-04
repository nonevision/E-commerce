import test from 'node:test';
import assert from 'node:assert/strict';
import { addItem } from '../src/cart.js';
import { createOrder } from '../src/order.js';

test('combines discount, tax and shipping into a total', () => {
  const cart = addItem([], { sku: 'A', price: 1000 }, 2);
  const order = createOrder({ cart, discount: { type: 'percent', value: 10 }, taxRate: 8 });
  assert.deepEqual(order, { itemsTotal: 2000, discountTotal: 200, tax: 144, shipping: 500, total: 2444 });
});
test('rejects an empty cart', () => {
  assert.throws(() => createOrder({ cart: [] }), /Cart is empty/);
});
