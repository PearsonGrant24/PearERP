import { Routes, Route } from "react-router-dom";

import MainLayout from "../common/layouts/MainLayout/MainLayout";

import DashboardPage from "../packages/dashboard/pages/DashboardPage";

export default function RoutePath() {

    return (

        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route index element={<DashboardPage />} />

            </Route>

        </Routes>

    );

}