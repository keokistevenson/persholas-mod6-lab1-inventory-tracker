import { sortByPrice } from "./utils/sorter";
import { calculateTax } from "./utils/taxCalculator";
import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/Product";


const p001: Product = new PhysicalProduct("P001", "Laptop", 1_000, 2.5);

const p011: PhysicalProduct = new PhysicalProduct("P011", "Laptop", 1_000, 12.5);

const p009: PhysicalProduct = new PhysicalProduct("P009", "Laptop", 1000, 9.5);

const dp2245: Product = new DigitalProduct("DP2245", "EPUB", 3.25, 50);

const dp2345: DigitalProduct = new DigitalProduct("DP2345", "PDF", 3.50, 50);

p011.applyBulkDiscount();
p009.applyDiscount(10);

const products: Product[] = []; // man this syntax is wack!

products.push(p001);
products.push(p011);
products.push(p009);
products.push(dp2245);
products.push(dp2345);

for (const product of products) {
  console.log(product.displayDetails());
  console.log(`Price with tax: $${calculateTax(product).toFixed(2)}`);

}

// Throwing in code to meet the requirements:
const sortedProducts = sortByPrice(products);

for (const product of sortedProducts) {
  console.log(product.displayDetails());
}