import test from 'node:test';
import assert from 'node:assert/strict';
import { addItem, createOrder, formatMoney } from '../src/index.js';

test('the entry point exposes a working checkout flow', () => {
  const cart = addItem([], { sku: 'A', price: 6000 });
  const order = createOrder({ cart, taxRate: 10 });
  assert.equal(formatMoney(order.total), '$66.00');
});
