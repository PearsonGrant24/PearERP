import { Outlet } from "react-router-dom";
import "./MainLayout.css";

import Sidebar from "../../components/Sidebar/Sidebar.tsx"
import Navbar from "../../components/Navbar/Navbar.tsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.tsx";
import Footer from "../../Footer/Footer.tsx"

export default function MainLayout() {
    return (
        <div className="layout">

            {/* Sidebar */}
            <Sidebar/>

           <div className="main">
                <Navbar />
                <Breadcrumb />
                <main className="page">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}