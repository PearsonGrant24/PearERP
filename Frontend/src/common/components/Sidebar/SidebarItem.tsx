// import "./SidebarItem.css";

// type SidebarItemProps = {
//     title: string;
// };

// export default function SidebarItem({
//     title,
// }: SidebarItemProps) {
//     return (
//         <div className="sidebar-item">
//             {title}
//         </div>
//     );
// }

// import { NavLink } from "react-router-dom";
// // import { LayoutDashboard } from "lucide-react";

// import "./SidebarItem.css";

// import {
//     LayoutDashboard,
//     ShoppingCart,
//     Boxes,
//     Truck,
//     Factory,
//     Calculator,
//     Users,
//     Briefcase,
//     FileBarChart,
//     Settings,
// } from "lucide-react";

// const iconMap = {
//     Dashboard: LayoutDashboard,
//     Sales: ShoppingCart,
//     Inventory: Boxes,
//     Purchasing: Truck,
//     Manufacturing: Factory,
//     Accounting: Calculator,
//     CRM: Users,
//     HR: Briefcase,
//     Reports: FileBarChart,
//     Settings: Settings,
// };

// type Props = {
//     title: string;
//     path: string;
// };

// export default function SidebarItem({
//     title,
//     path,
// }: Props) {
//     return (
//         <NavLink
//             to={path}
//             className="sidebar-item"
//         >
//             <LayoutDashboard
//                     size={30}
//                     color="Red"
//                     strokeWidth={3}
//                 />

//             <span>{title}</span>
//         </NavLink>
//     );
// }

import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";
import {
    LayoutDashboard,
    Boxes,
    Truck,
    Factory,
    Calculator,
    Users,
    Briefcase,
    FileBarChart,
    Settings,
} from "lucide-react";

import "./SidebarItem.css";

type Props = {
    title: string;
    path: string;
    icon: string;
    collapsed: boolean;
};

const icons = {
    dashboard: LayoutDashboard,
    inventory: Boxes,
    purchasing: Truck,
    manufacturing: Factory,
    accounting: Calculator,
    crm: Users,
    hr: Briefcase,
    reports: FileBarChart,
    settings: Settings,
};

export default function SidebarItem({
    title,
    path,
    icon,
    collapsed,

}: Props) {

    const Icon = icons[icon as keyof typeof icons];
   // const { collapsed } = useSidebar();

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-item active"
                    : "sidebar-item"
            }
        >
            <Icon size={20} />

            {!collapsed && <span>{title}</span>}
        </NavLink>
    );
}