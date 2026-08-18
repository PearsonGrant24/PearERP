import "./Sidebar.css";

import { Factory } from "lucide-react";

import { navigation } from "../../config/navigation";

import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";

import { useSidebar } from "../../context/SidebarContext";

export default function Sidebar() {

    const {
        collapsed,
    } = useSidebar();

    return (

        <aside
            className={
                collapsed
                    ? "sidebar collapsed"
                    : "sidebar"
            }
        >

            <div className="sidebar__logo">

                <div className="sidebar__logo-icon">

                    <Factory size={32} />

                </div>

                {!collapsed && (

                    <div className="sidebar__logo-text">

                        <h2>PX Industries ERP</h2>

                        <span>
                            Small Business Suite
                        </span>

                    </div>

                )}

            </div>

            <nav className="sidebar__menu">

                {navigation.map(item => (

                    item.children ? (

                        <SidebarGroup
                            key={item.title}
                            title={item.title}
                            path={item.path}
                            icon={item.icon}
                            children={item.children}
                            collapsed={collapsed}
                        />

                    ) : (

                        <SidebarItem
                            key={item.title}
                            title={item.title}
                            path={item.path}
                            icon={item.icon}
                            collapsed={collapsed}
                        />

                    )

                ))}

            </nav>

            <div className="sidebar__footer">

                {!collapsed && (
                    <>
                        <strong>Pearson Grant</strong>
                        <span>Administrator</span>
                    </>
                )}

            </div>

        </aside>

    );
}