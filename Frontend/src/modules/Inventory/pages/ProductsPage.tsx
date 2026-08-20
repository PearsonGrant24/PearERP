import "./ProductsPage.css";

import { useState } from "react";
import { MoreHorizontal, PackagePlus } from "lucide-react";

import DataTable from "../../../common/ui/DataTable/DataTable";
import { Column } from "../../../common/ui/DataTable/types";

import { Product } from "../Products/types";


const products: Product[] = [
    {
        id: "1",
        name: "Plastic Water Bottle 750ml",
        sku: "PWB-750",
        category: "Kitchenware",
        stock: 240,
        price: 2.5,
        status: "In Stock",
    },
    {
        id: "2",
        name: "Lunch Box 1.5L",
        sku: "LB-1500",
        category: "Kitchenware",
        stock: 85,
        price: 8.5,
        status: "Low Stock",
    },
    {
        id: "3",
        name: "Plastic Plate 10-inch",
        sku: "PLT-10",
        category: "Kitchenware",
        stock: 320,
        price: 2,
        status: "In Stock",
    },
    {
        id: "4",
        name: "PVC Electrical Box",
        sku: "PVC-EB-01",
        category: "Electrical",
        stock: 0,
        price: 1,
        status: "Out of Stock",
    },
    {
        id: "5",
        name: "Plastic Tool Box",
        sku: "TB-001",
        category: "Tools",
        stock: 42,
        price: 6,
        status: "Low Stock",
    },
    {
        id: "6",
        name: "Plastic Storage Container",
        sku: "PSC-20",
        category: "Household",
        stock: 156,
        price: 5,
        status: "In Stock",
    },
];


export default function ProductsPage() {

    const [selectedProducts, setSelectedProducts] =
        useState<(string | number)[]>([]);


    const columns: Column<Product>[] = [

        {
            key: "name",
            header: "Product",
            sortable: true,
            render: (product) => (

                <div className="product-name-cell">

                    <div className="product-icon">
                        <PackagePlus size={18} />
                    </div>

                    <div>
                        <strong>{product.name}</strong>

                        <span>{product.sku}</span>
                    </div>

                </div>

            ),
        },

        {
            key: "category",
            header: "Category",
            sortable: true,
        },

        {
            key: "stock",
            header: "Stock",
            sortable: true,
            align: "right",
        },

        {
            key: "price",
            header: "Selling Price",
            sortable: true,
            align: "right",
            render: (product) =>
                `$${product.price.toFixed(2)}`,
        },

        {
            key: "status",
            header: "Status",
            sortable: true,
            render: (product) => (

                <span
                    className={`product-status product-status--${product.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                >
                    {product.status}
                </span>

            ),
        },

        {
            key: "id",
            header: "",
            align: "right",
            render: () => (

                <button
                    className="product-action-button"
                    title="Product actions"
                >
                    <MoreHorizontal size={18} />
                </button>

            ),
        },

    ];


    return (

        <div className="products-page">

            <div className="products-page__header">

                <div>
                    <h1>Products</h1>

                    <p>
                        Manage your products, stock levels and product information.
                    </p>
                </div>

                <button
                    className="products-page__add-button"
                    onClick={() => {
                        // Product creation will be implemented next.
                    }}
                >
                    + Add Product
                </button>

            </div>


            <div className="products-page__content">

                <DataTable
                    columns={columns}
                    data={products}
                    selectedRows={selectedProducts}
                    onSelectionChange={setSelectedProducts}
                    searchableKeys={[
                        "name",
                        "sku",
                        "category",
                    ]}
                    pageSize={10}
                />

            </div>

        </div>

    );
}