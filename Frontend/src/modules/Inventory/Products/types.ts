
export type ProductStatus =
    | "In Stock"
    | "Low Stock"
    | "Out of Stock";

export interface Product {
    id: string;
    name: string;
    sku: string;
    category: string;
    stock: number;
    price: number;
    status: ProductStatus;
}