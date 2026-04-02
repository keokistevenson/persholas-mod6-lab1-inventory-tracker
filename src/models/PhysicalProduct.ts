import { Product } from "./Product";

export class PhysicalProduct extends Product {
    constructor(sku: string, name: string, price: number, private weight: number) {
        super(sku, name, price); // pass values to allow inheritance of displayDetails() code on the base class.
    }  // Is there a concept such as method hiding in TS when you dont override the base class can just use your own?

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

    getPriceWithTax(): number {
        return this.price * 1.1; // 10% tax
    }
}

