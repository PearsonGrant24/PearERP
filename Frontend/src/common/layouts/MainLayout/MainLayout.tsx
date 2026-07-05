import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        Sidebar
      </aside>

      <header className="header">
        Navbar
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}