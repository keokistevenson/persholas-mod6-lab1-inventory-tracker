import { Product } from "./Product";
export declare class DigitalProduct extends Product {
    private fileSize;
    constructor(sku: string, name: string, price: number, fileSize: number);
    get formattedFileSize(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=DigitalProduct.d.ts.map