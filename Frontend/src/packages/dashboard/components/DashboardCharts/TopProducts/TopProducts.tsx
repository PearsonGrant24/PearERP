import "./TopProducts.css";

import Card from "../../Card/Card";

import { topProducts } from "../../../data/dashboardData";

import { ChevronRight } from "lucide-react";

export default function TopProducts() {

    return (

        <div className="top-products">

            <Card title="Top Selling Products">

                <div className="top-products__list">

                    {

                        topProducts.map(product => (

                            <div
                                key={product.id}
                                className="top-products__item"
                            >

                                <div className="top-products__left">

                                    <span className="top-products__rank">

                                        {product.id}

                                    </span>

                                    <div>

                                        <div className="top-products__name">

                                            {product.name}

                                        </div>

                                        <div className="top-products__qty">

                                            {product.quantity}

                                        </div>

                                    </div>

                                </div>

                                <strong>

                                    {product.revenue}

                                </strong>

                            </div>

                        ))

                    }

                </div>

                <div className="top-products__footer">

                    View all products

                    <ChevronRight size={18} />

                </div>

            </Card>

        </div>

    );

}