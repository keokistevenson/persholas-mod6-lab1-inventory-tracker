"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    // public interface
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    } // smple property assignment
    displayDetails() {
        return `${this.name} (SKU: ${this.sku}) - $${this.price.toFixed(2)}`;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map