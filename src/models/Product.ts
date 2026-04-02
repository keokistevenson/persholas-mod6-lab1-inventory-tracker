

export abstract class Product {

    // public interface
    constructor(public sku: string, public name: string, public price: number) { } // smple property assignment

    displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) - $${this.price.toFixed(2)}`;
    }

    // looks like this will be implemented later.  I could put functionality now and alter it later but why?
    abstract getPriceWithTax(): number;
}