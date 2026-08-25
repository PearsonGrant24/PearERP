export type ProductStatus =
    | "In Stock"
    | "Low Stock"
    | "Out of Stock";

export type ProductType =
    | "Finished Product"
    | "Raw Material"
    | "Consumable"
    | "Packaging Material";

export interface Product {
    id: string;

    name: string;

    sku: string;

    barcode?: string;

    category: string;

    type: ProductType;

    warehouse: string;

    stock: number;

    price: number;

    status: ProductStatus;
}