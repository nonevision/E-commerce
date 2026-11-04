export function addItem(cart, product, quantity = 1) {
  if (!Number.isInteger(quantity) || quantity < 1) throw new Error('Invalid quantity');
  const existing = cart.find((item) => item.product.sku === product.sku);
  if (!existing) return [...cart, { product, quantity }];
  return cart.map((item) =>
    item === existing ? { ...item, quantity: item.quantity + quantity } : item,
  );
}

export function removeItem(cart, sku) {
  return cart.filter((item) => item.product.sku !== sku);
}

export function subtotal(cart) {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}
