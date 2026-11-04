import test from 'node:test';
import assert from 'node:assert/strict';
import { discountAmount } from '../src/discount.js';

test('calculates percent and fixed discounts', () => {
  assert.equal(discountAmount(2000, { type: 'percent', value: 10 }), 200);
  assert.equal(discountAmount(2000, { type: 'fixed', value: 500 }), 500);
});
test('never discounts more than the subtotal', () => {
  assert.equal(discountAmount(300, { type: 'fixed', value: 500 }), 300);
});
test('rejects invalid discounts', () => {
  assert.throws(() => discountAmount(100, { type: 'percent', value: 101 }));
  assert.throws(() => discountAmount(100, { type: 'bogus', value: 1 }), /Unknown/);
});
