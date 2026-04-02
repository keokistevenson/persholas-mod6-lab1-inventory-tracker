"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DigitalProduct_1 = require("./models/DigitalProduct");
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const product = new PhysicalProduct_1.PhysicalProduct("P001", "Laptop", 1000, 2.5);
console.log(product.displayDetails());
const dp = new DigitalProduct_1.DigitalProduct("DP2345", "PDF", 3.50, 50);
console.log(dp.displayDetails());
console.log(dp.formattedFileSize);
//# sourceMappingURL=main.js.map