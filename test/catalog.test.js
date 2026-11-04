import test from 'node:test';
import assert from 'node:assert/strict';
import { createCatalog } from '../src/catalog.js';

test('finds products by SKU', () => {
  const catalog = createCatalog([{ sku: 'A', name: 'Mug', price: 1200 }]);
  assert.equal(catalog.get('A').name, 'Mug');
  assert.equal(catalog.list().length, 1);
});
test('rejects duplicate SKUs and invalid prices', () => {
  const mug = { sku: 'A', name: 'Mug', price: 1200 };
  assert.throws(() => createCatalog([mug, mug]), /Duplicate/);
  assert.throws(() => createCatalog([{ sku: 'B', price: 9.99 }]), /Invalid price/);
});
