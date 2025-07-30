import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  unitPriceWithDiscount: number;
}

export const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      unitPriceWithDiscount: Number(product.basePrice),
    };
  }

  const unitPriceWithDiscount =
    Number(product.basePrice) -
    (Number(product.basePrice) * product.discountPercentage) / 100;
  return {
    ...product,
    unitPriceWithDiscount,
  };
};
