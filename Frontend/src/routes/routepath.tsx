import { Routes, Route } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import MainLayout from "../common/layouts/MainLayout/MainLayout";

function Dashboard() {
    return <div  style={{padding: 40, background: "white", color: "black",}}>
            <h1>Testing Lucidde</h1>

                <LayoutDashboard
                    size={30}
                    color="purple"
                    strokeWidth={3}
                />
    </div>
    ;
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