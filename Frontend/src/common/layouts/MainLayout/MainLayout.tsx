import { Outlet } from "react-router-dom";
import "./MainLayout.css";

import Sidebar from "../../components/Sidebar/Sidebar.tsx"
import Navbar from "./Navbar/Navbar.tsx";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb.tsx";
import Footer from "../../Footer/Footer.tsx"

export default function MainLayout() {
    return (
        <div className="layout">

    <Sidebar />

    <div className="main">

        <Navbar />

        <main className="page">

            <Outlet />

        </main>

    </div>

</div>
    );
}