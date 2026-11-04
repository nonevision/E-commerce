import test from 'node:test';
import assert from 'node:assert/strict';
import { searchProducts } from '../src/search.js';

const products = [
  { sku: 'A', name: 'Coffee Mug', tags: ['kitchen'] },
  { sku: 'B', name: 'Notebook' },
];
test('matches names and tags without case sensitivity', () => {
  assert.deepEqual(searchProducts(products, 'MUG').map((p) => p.sku), ['A']);
  assert.deepEqual(searchProducts(products, 'kitchen').map((p) => p.sku), ['A']);
});
test('returns nothing for a blank query', () => {
  assert.deepEqual(searchProducts(products, '  '), []);
});
