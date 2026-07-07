import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
    return (
        <div className="layout">

            {/* Sidebar */}
            <aside className="sidebar">
                Sidebar
            </aside>

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