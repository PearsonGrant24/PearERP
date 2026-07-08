import "./Sidebar.css";
import { navigation } from "../../../config/navigation.ts";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__logo">
                <h2>Plastic ERP</h2>
                <span>Small Business Suite</span>
            </div>

            <nav className="sidebar__menu">
                {navigation.map((item) => (
                    <div key={item.title} className="sidebar__item">
                        {item.title}
                    </div>
                ))}
            </nav>

            <div className="sidebar__footer">
                <strong>Pearson Grant</strong>
                <span>Administrator</span>
            </div>

        </aside>
    );
}