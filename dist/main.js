"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taxCalculator_1 = require("./utils/taxCalculator");
const DigitalProduct_1 = require("./models/DigitalProduct");
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const product = new PhysicalProduct_1.PhysicalProduct("P001", "Laptop", 1000, 2.5);
const digitalP = new DigitalProduct_1.DigitalProduct("DP2245", "EPUB", 3.25, 50);
const dp = new DigitalProduct_1.DigitalProduct("DP2345", "PDF", 3.50, 50);
const products = []; // man this syntax is wack!
products.push(product);
products.push(digitalP);
products.push(dp);
for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Price with tax: $${(0, taxCalculator_1.calculateTax)(product).toFixed(2)}`);
}
//# sourceMappingURL=main.js.map