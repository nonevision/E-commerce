import test from 'node:test';
import assert from 'node:assert/strict';
import { formatMoney } from '../src/money.js';

test('formats cents as currency', () => {
  assert.equal(formatMoney(1999), '$19.99');
  assert.equal(formatMoney(0), '$0.00');
});
