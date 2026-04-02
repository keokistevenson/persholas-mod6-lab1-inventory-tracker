import { Product } from "./Product";
export declare class PhysicalProduct extends Product {
    private weight;
    constructor(sku: string, name: string, price: number, weight: number);
    get formattedWeight(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map