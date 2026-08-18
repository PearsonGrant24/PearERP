import { Routes, Route } from "react-router-dom";

import MainLayout from "../common/layouts/MainLayout/MainLayout";
import ProductsPage from "../../src/modules/Inventory/pages/ProductsPage";
import DashboardPage from "../packages/dashboard/pages/DashboardPage";

export default function RoutePath() {

    return (

        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route index element={<DashboardPage />} />

                <Route
                    path="inventory/products"
                    element={<ProductsPage />}
                />

            </Route>

        </Routes>

    );

}