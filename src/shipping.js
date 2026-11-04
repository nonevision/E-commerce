export const FLAT_RATE = 500;
export const FREE_SHIPPING_FROM = 5000;

export function shippingCost(amount) {
  return amount >= FREE_SHIPPING_FROM ? 0 : FLAT_RATE;
}
