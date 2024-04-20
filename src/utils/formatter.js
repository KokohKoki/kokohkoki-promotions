export const priceFormatter = (price, selectedCurrency) => {
  let itemPrice;
  switch (selectedCurrency) {
    case "IDR":
      itemPrice = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
      break;
    case "USD":
      itemPrice = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      break;
    default:
      itemPrice = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
      break;
  }
  return itemPrice;
};

export const priceFormatNoFraction = (price, selectedCurrency) => {
  let formatPrice;
  switch (selectedCurrency) {
    case "IDR":
      formatPrice = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
      break;
    case "USD":
      formatPrice = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      break;
    default:
      formatPrice = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
      break;
  }
  return formatPrice;
};
