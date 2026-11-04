export function createInventory(stock) {
  const levels = new Map(Object.entries(stock));
  return {
    available: (sku) => levels.get(sku) ?? 0,
    reserve(sku, quantity) {
      const current = levels.get(sku) ?? 0;
      if (quantity > current) throw new Error(`Not enough stock for ${sku}`);
      levels.set(sku, current - quantity);
    },
  };
}
