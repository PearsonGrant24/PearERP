import "./ProductsPage.css";

import { useState } from "react";
import {
    Package,
    PackageCheck,
    AlertTriangle,
    PackageX,
    DollarSign,
    MoreHorizontal,
} from "lucide-react";

import Card from "../../../packages/dashboard/components/Card/Card";
import DataTable from "../../../common/ui/DataTable/DataTable";
import { Column } from "../../..//common/ui/DataTable/types";

import { Product } from "../Products/types";

import "./ProductsPage.css";


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
                        <Package size={18} />
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

            {/* Page Header */}

            <div className="products-page__header">

                <div>
                    <h1>Products</h1>

                    <p>
                        Manage all your products and inventory items
                    </p>
                </div>

                <div className="products-page__header-actions">

                    <button className="products-page__export-button">
                        Export
                    </button>

                    <button className="products-page__add-button">
                        + Add Product
                    </button>

                </div>

            </div>


            {/* Statistics */}

            <div className="products-stats">

                <Card>

                    <div className="product-stat">

                        <div className="product-stat__icon product-stat__icon--blue">
                            <Package size={22} />
                        </div>

                        <div className="product-stat__content">

                            <span className="product-stat__label">
                                Total Products
                            </span>

                            <strong className="product-stat__value">
                                356
                            </strong>

                            <span className="product-stat__description product-stat__description--blue">
                                All active products
                            </span>

                        </div>

                    </div>

                </Card>


                <Card>

                    <div className="product-stat">

                        <div className="product-stat__icon product-stat__icon--green">
                            <PackageCheck size={22} />
                        </div>

                        <div className="product-stat__content">

                            <span className="product-stat__label">
                                In Stock
                            </span>

                            <strong className="product-stat__value">
                                289
                            </strong>

                            <span className="product-stat__description">
                                81% of total
                            </span>

                        </div>

                    </div>

                </Card>


                <Card>

                    <div className="product-stat">

                        <div className="product-stat__icon product-stat__icon--orange">
                            <AlertTriangle size={22} />
                        </div>

                        <div className="product-stat__content">

                            <span className="product-stat__label">
                                Low Stock
                            </span>

                            <strong className="product-stat__value">
                                42
                            </strong>

                            <span className="product-stat__description product-stat__description--orange">
                                Require attention
                            </span>

                        </div>

                    </div>

                </Card>


                <Card>

                    <div className="product-stat">

                        <div className="product-stat__icon product-stat__icon--red">
                            <PackageX size={22} />
                        </div>

                        <div className="product-stat__content">

                            <span className="product-stat__label">
                                Out of Stock
                            </span>

                            <strong className="product-stat__value">
                                25
                            </strong>

                            <span className="product-stat__description product-stat__description--red">
                                Need to reorder
                            </span>

                        </div>

                    </div>

                </Card>


                <Card>

                    <div className="product-stat">

                        <div className="product-stat__icon product-stat__icon--purple">
                            <DollarSign size={22} />
                        </div>

                        <div className="product-stat__content">

                            <span className="product-stat__label">
                                Total Value
                            </span>

                            <strong className="product-stat__value">
                                $128,560.00
                            </strong>

                            <span className="product-stat__description product-stat__description--purple">
                                Inventory value
                            </span>

                        </div>

                    </div>

                </Card>

            </div>


            {/* Products Table */}

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