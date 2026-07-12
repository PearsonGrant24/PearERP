import { Routes, Route } from "react-router-dom";

import MainLayout from "../common/layouts/MainLayout/MainLayout";

function Dashboard() {
    return <h1>Dashboard</h1>;
}

export default function RoutePath() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route
                    index
                    element={<Dashboard />}
                />

                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

            </Route>

        </Routes>
    );
}