export function unitPriceFormatStr(unitPrice, unitsNumber) {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice, unitQuantity = 1) {
  if (unitQuantity > 1) {
    return `$${(unitPrice * unitQuantity).toFixed(2)}`;
  } else {
    return `$${unitPrice.toFixed(2)}`;
  }
}

export function totalPriceFormatStr(coffeeType) {
  const total = coffeeType;
  return `Total: $${total.toFixed(2)}`;
}
