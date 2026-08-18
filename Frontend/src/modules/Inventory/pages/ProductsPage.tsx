import "./ProductsPage.css";

export default function ProductsPage() {

    return (

        <div className="products-page">

            <div className="products-page__header">

                <div>
                    <h1>Products</h1>

                    <p>
                        Manage your products, stock levels and product information.
                    </p>
                </div>

                <button className="products-page__add-button">
                    + Add Product
                </button>

            </div>

            <div className="products-page__content">

                {/* DataTable will go here */}

            </div>

        </div>

    );
}