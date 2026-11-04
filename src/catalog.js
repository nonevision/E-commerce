export function createCatalog(products) {
  const bySku = new Map();
  for (const product of products) {
    if (!Number.isInteger(product.price) || product.price < 0) {
      throw new Error(`Invalid price for ${product.sku}`);
    }
    if (bySku.has(product.sku)) throw new Error(`Duplicate SKU ${product.sku}`);
    bySku.set(product.sku, product);
  }
  return {
    get: (sku) => bySku.get(sku),
    list: () => [...bySku.values()],
  };
}
