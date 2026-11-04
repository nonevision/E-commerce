import test from 'node:test';
import assert from 'node:assert/strict';
import { shippingCost } from '../src/shipping.js';

test('charges a flat rate below the threshold', () => {
  assert.equal(shippingCost(4999), 500);
});
test('ships free at the threshold', () => {
  assert.equal(shippingCost(5000), 0);
});
