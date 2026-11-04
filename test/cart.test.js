import test from 'node:test';
import assert from 'node:assert/strict';
import { addItem, removeItem, subtotal } from '../src/cart.js';

const mug = { sku: 'A', price: 1000 };
test('combines quantities for the same product', () => {
  const cart = addItem(addItem([], mug), mug, 2);
  assert.equal(cart.length, 1);
  assert.equal(subtotal(cart), 3000);
});
test('removes items and rejects bad quantities', () => {
  assert.deepEqual(removeItem(addItem([], mug), 'A'), []);
  assert.throws(() => addItem([], mug, 0), /Invalid quantity/);
});
