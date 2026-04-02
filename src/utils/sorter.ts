
import { Product } from "../models/Product";

export function getCheapest(products:  Product[]):  Product | null {
  if (products.length === 0) return null;

  // Get the cheapest or first  product to start the comparison.
  let cheapest = products[0];

  for (const product of products)  {
    if (product.price < cheapest.price) {
      cheapest = product;
    }
  }

  return cheapest;
}