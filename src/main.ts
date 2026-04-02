import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/Product";


const product: Product = new PhysicalProduct("P001", "Laptop", 1_000, 2.5);

console.log(product.displayDetails());

const dp: DigitalProduct = new DigitalProduct("DP2345", "PDF", 3.50, 50);

console.log(dp.displayDetails());

console.log(dp.formattedFileSize);