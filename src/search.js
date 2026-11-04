export function searchProducts(products, query) {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return products.filter((product) =>
    [product.name, ...(product.tags ?? [])].some((text) => text.toLowerCase().includes(term)),
  );
}
