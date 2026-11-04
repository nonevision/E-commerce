import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTax } from '../src/tax.js';

test('rounds tax to the nearest cent', () => {
  assert.equal(calculateTax(1800, 8), 144);
  assert.equal(calculateTax(1000, 8.25), 83);
});
test('rejects a negative rate', () => {
  assert.throws(() => calculateTax(100, -1), /Invalid tax rate/);
});
