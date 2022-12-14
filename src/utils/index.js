export function showPriceSymbol(object, currencyIndex) {
  const price = Object.values(object).filter((el) => el)[0];
  return price.item.prices[currencyIndex].currency.symbol;
}

export function getTotalCount(object) {
  return Object.values(object)
    .filter((el) => el)
    .reduce((acc, value) => acc + value.amount, 0);
}

export function calculatePrice(object, currencyIndex) {
  return Object.values(object)
    .filter((el) => el)
    .reduce(
      (acc, value) =>
        acc + value.item.prices[currencyIndex].amount * value.amount,
      0
    )
    .toFixed(2);
}
