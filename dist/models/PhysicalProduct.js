"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price); // pass values to allow inheritance of displayDetails() code on the base class.
        this.weight = weight;
    } // Is there a concept such as method hiding in TS when you dont override the base class can just use your own?
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    getPriceWithTax() {
        return this.price * 1.1; // 10% tax
    }
}
exports.PhysicalProduct = PhysicalProduct;
//# sourceMappingURL=PhysicalProduct.js.map