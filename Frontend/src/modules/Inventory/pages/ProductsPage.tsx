import "./ProductsPage.css";

import { useMemo, useState } from "react";
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
        name: "20L Plastic Bucket",
        sku: "BKT-020",
        barcode: "6001234567890",
        category: "Household",
        type: "Finished Product",
        warehouse: "Main Warehouse",
        stock: 245,
        price: 3,
        status: "In Stock",
    },
    {
        id: "2",
        name: "PVC Elbow 90°",
        sku: "PVC-E90-032",
        barcode: "6001234567891",
        category: "Plumbing",
        type: "Finished Product",
        warehouse: "Main Warehouse",
        stock: 950,
        price: 0.9,
        status: "In Stock",
    },
    {
        id: "3",
        name: "HDPE Granules",
        sku: "RM-HDPE-001",
        barcode: "6001234567892",
        category: "Raw Materials",
        type: "Raw Material",
        warehouse: "Raw Materials Warehouse",
        stock: 1250,
        price: 1.65,
        status: "In Stock",
    },

    {
        id: "4",
        name: "Machine Lubricant 1L",
        sku: "CONS-LUB-001",
        barcode: "6001234567893",
        category: "Consumables",
        type: "Consumable",
        warehouse: "Main Warehouse",
        stock: 18,
        price: 3.2,
        status: "Low Stock",
    },
    {
        id: "5",
        name: "Carton Box Medium",
        sku: "PKG-CB-MED",
        barcode: "6001234567894",
        category: "Packaging",
        type: "Packaging Material",
        warehouse: "Packaging Warehouse",
        stock: 0,
        price: 0.5,
        status: "Out of Stock",
    },
     {
        id: "6",
        name: "Carton Box Medium",
        sku: "PKG-CB-MED",
        barcode: "6001234567894",
        category: "Packaging",
        type: "Packaging Material",
        warehouse: "Packaging Warehouse",
        stock: 0,
        price: 0.5,
        status: "Out of Stock",
    },
];


export default function ProductsPage() {

    const [searchTerm, setSearchTerm] = useState("");

    const [categoryFilter, setCategoryFilter] =
        useState("All Categories");

    const [typeFilter, setTypeFilter] =
        useState("All Types");

    const [statusFilter, setStatusFilter] =
        useState("All Statuses");

    const [warehouseFilter, setWarehouseFilter] =
        useState("All Warehouses");

    const [selectedProducts, setSelectedProducts] =
        useState<(string | number)[]>([]);

    const filteredProducts = useMemo(() => {

        const search = searchTerm.toLowerCase().trim();

        return products.filter(product => {

            const matchesSearch =
                !search ||
                product.name.toLowerCase().includes(search) ||
                product.sku.toLowerCase().includes(search) ||
                product.barcode?.toLowerCase().includes(search);

            const matchesCategory =
                categoryFilter === "All Categories" ||
                product.category === categoryFilter;

            const matchesType =
                typeFilter === "All Types" ||
                product.type === typeFilter;

            const matchesStatus =
                statusFilter === "All Statuses" ||
                product.status === statusFilter;

            const matchesWarehouse =
                warehouseFilter === "All Warehouses" ||
                product.warehouse === warehouseFilter;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesType &&
                matchesStatus &&
                matchesWarehouse
            );

        });

}, [
    searchTerm,
    categoryFilter,
    typeFilter,
    statusFilter,
    warehouseFilter,
]);

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

            <div className="products-filter-toolbar">

                <div className="products-search">

                    {/* <Search size={18} /> */}

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                        placeholder="Search products by name, SKU or barcode..."
                    />

                </div>


                <div className="products-filter">

                    <label>Category</label>

                    <select
                        value={categoryFilter}
                        onChange={(event) =>
                            setCategoryFilter(event.target.value)
                        }
                    >
                        <option>All Categories</option>
                        <option>Household</option>
                        <option>Plumbing</option>
                        <option>Raw Materials</option>
                        <option>Consumables</option>
                        <option>Packaging</option>
                    </select>

                </div>


                <div className="products-filter">

                    <label>Product Type</label>

                    <select
                        value={typeFilter}
                        onChange={(event) =>
                            setTypeFilter(event.target.value)
                        }
                    >
                        <option>All Types</option>
                        <option>Finished Product</option>
                        <option>Raw Material</option>
                        <option>Consumable</option>
                        <option>Packaging Material</option>
                    </select>

                </div>


                <div className="products-filter">

                    <label>Stock Status</label>

                    <select
                        value={statusFilter}
                        onChange={(event) =>
                            setStatusFilter(event.target.value)
                        }
                    >
                        <option>All Statuses</option>
                        <option>In Stock</option>
                        <option>Low Stock</option>
                        <option>Out of Stock</option>
                    </select>

                </div>


                <div className="products-filter">

                    <label>Warehouse</label>

                    <select
                        value={warehouseFilter}
                        onChange={(event) =>
                            setWarehouseFilter(event.target.value)
                        }
                    >
                        <option>All Warehouses</option>
                        <option>Main Warehouse</option>
                        <option>Raw Materials Warehouse</option>
                        <option>Packaging Warehouse</option>
                    </select>

                </div>


                <button
                    className="products-filter-button"
                    onClick={() => {
                        setSearchTerm("");
                        setCategoryFilter("All Categories");
                        setTypeFilter("All Types");
                        setStatusFilter("All Statuses");
                        setWarehouseFilter("All Warehouses");
                    }}
                >
                    Filters
                </button>

            </div>

            {/* Products Table */}

            <div className="products-page__content">

                <DataTable
                    columns={columns}
                    data={filteredProducts}
                    selectedRows={selectedProducts}
                    onSelectionChange={setSelectedProducts}
                    searchableKeys={[]}
                    showSearch={false}
                    resetKey={filteredProducts.length}
                    pageSize={10}
                />

            </div>

        </div>

    );
}