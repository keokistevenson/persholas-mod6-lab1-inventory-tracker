import { Product } from "../models/Product";

// Takes any object of type product
export function  calculateTax(product: Product): number {
  return product.getPriceWithTax();
}