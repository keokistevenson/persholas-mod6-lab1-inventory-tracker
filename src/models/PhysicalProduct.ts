import { Product } from "./Product";
import { DiscountableProduct } from "./DiscountableProduct";

export class PhysicalProduct extends Product implements DiscountableProduct {
    constructor(sku: string, name: string, price: number, private weight: number) {
        super(sku, name, price); // pass values to support functionality of displayDetails() code on the base class.
    }  // Is there a concept such as method hiding in TS when you dont override the base class can just use your own? The answer appears to be NO.

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

    getPriceWithTax(): number {
        return this.price * 1.1; // 10% tax
    }

    applyDiscount(percent: number): void {
        this.price = this.price * (1 - percent / 100);
    }

    applyBulkDiscount(): void {
        if (this.weight > 10) {
            this.price = this.price * 0.85; // 15% discount
        }
    }
}

