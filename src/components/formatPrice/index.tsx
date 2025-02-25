export const FormatPrice = (price: number, currency: boolean = true) => {
  const formattedPrice = price.toLocaleString("fa-IR");
  return currency ? `${formattedPrice} تومان` : formattedPrice;
};
