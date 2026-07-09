import "./Sidebar.css";
import { navigation } from "../../../config/navigation.ts";

import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__logo">
                <h2>Plastic ERP</h2>
                <span>Small Business Suite</span>
            </div>

            <nav className="sidebar__menu">

                {navigation.map((item) =>

                    item.children ? (

                        <SidebarGroup
                            key={item.title}
                            title={item.title}
                            children={item.children}
                        />

                    ) : (

                        <SidebarItem
                            key={item.title}
                            title={item.title}
                        />

                    )

                )}

            </nav>

            <div className="sidebar__footer">
                <strong>Pearson Grant</strong>
                <span>Administrator</span>
            </div>

        </aside>
    );
}