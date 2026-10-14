// src/utils/index.js

export const createPageUrl = (pageName) => `/${pageName.toLowerCase()}`;

export const formatPrice = (price) => {
  if (price === null || price === undefined || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(price);
  if (isNaN(num)) return `${price} €`;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: num % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(num);
};