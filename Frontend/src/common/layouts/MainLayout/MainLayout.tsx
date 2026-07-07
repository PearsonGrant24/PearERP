import { Outlet } from "react-router-dom";
import "./MainLayout.css";

import Sidebar from "../MainLayout/Sidebar/Sidebar.tsx"
import Navbar from "../MainLayout/Navbar/Navbar.tsx";
import Breadcrumb from "./Breadcrumb/Breadcrumb.tsx";
import Footer from "../MainLayout/Footer/Footer.tsx"

export default function MainLayout() {
    return (
        <div className="layout">

            {/* Sidebar */}
            <Sidebar/>

            {/* Main Section */}
            <div className="main">

                {/* Navbar */}
                <nav className="navbar">
                    Navbar
                </nav>

                {/* Breadcrumb */}
                <div className="breadcrumb">
                    Dashboard / Sales / Quotations
                </div>

                {/* Current Page */}
                <main className="page">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="footer">
                    Footer
                </footer>

            </div>

        </div>
    );
}