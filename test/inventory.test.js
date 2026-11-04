import test from 'node:test';
import assert from 'node:assert/strict';
import { createInventory } from '../src/inventory.js';

test('reserving reduces available stock', () => {
  const inventory = createInventory({ A: 3 });
  inventory.reserve('A', 2);
  assert.equal(inventory.available('A'), 1);
});
test('refuses to oversell', () => {
  const inventory = createInventory({ A: 1 });
  assert.throws(() => inventory.reserve('A', 2), /Not enough stock/);
  assert.equal(inventory.available('A'), 1);
});
