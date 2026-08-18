// import { NavLink } from "react-router-dom";
// import { useSidebar } from "../../context/SidebarContext";
// import {
//     LayoutDashboard,
//     Boxes,
//     Truck,
//     Factory,
//     Calculator,
//     Users,
//     Briefcase,
//     FileBarChart,
//     Settings,
// } from "lucide-react";

// import "./SidebarItem.css";

// type Props = {
//     title: string;
//     path: string;
//     icon: string;
//     collapsed: boolean;
// };

// const icons = {
//     dashboard: LayoutDashboard,
//     inventory: Boxes,
//     purchasing: Truck,
//     manufacturing: Factory,
//     accounting: Calculator,
//     crm: Users,
//     hr: Briefcase,
//     reports: FileBarChart,
//     settings: Settings,
// };

// export default function SidebarItem({
//     title,
//     path,
//     icon,
//     collapsed,

// }: Props) {

//     const Icon = icons[icon as keyof typeof icons];
//    // const { collapsed } = useSidebar();

//     return (
//         <NavLink
//             to={path}
//             className={({ isActive }) =>
//                 isActive
//                     ? "sidebar-item active"
//                     : "sidebar-item"
//             }
//         >
//             <Icon size={20} />

//             {!collapsed && <span>{title}</span>}
//         </NavLink>
//     );
// }



// // import { NavLink } from "react-router-dom";
// // // import {  } from "lucide-react";
// // import {
// //     LucideIcon,
// //     LayoutDashboard,
// //     Boxes,
// //     Truck,
// //     Factory,
// //     Calculator,
// //     Users,
// //     Briefcase,
// //     FileBarChart,
// //     Settings,
// // } from "lucide-react";

// // import "./SidebarItem.css";

// // type Props = {
// //     title: string;
// //     path: string;
// //     icon?: LucideIcon;
// //     collapsed?: boolean;
// // };

// // const icons = {
// //     dashboard: LayoutDashboard,
// //     inventory: Boxes,
// //     purchasing: Truck,
// //     manufacturing: Factory,
// //     accounting: Calculator,
// //     crm: Users,
// //     hr: Briefcase,
// //     reports: FileBarChart,
// //     settings: Settings,
// // };

// // export default function SidebarItem({
// //     title,
// //     path,
// //     icon: Icon,
// //     collapsed = false,


// // }: Props) {

// //     return (
// //         <NavLink
// //             to={path}
// //             className={({ isActive }) =>
// //                 isActive
// //                     ? "sidebar-item active"
// //                     : "sidebar-item"
// //             }
// //         >

// //             {Icon && <Icon size={20} />}

// //             {!collapsed && (
// //                 <span>{title}</span>
// //             )}

// //         </NavLink>
// //     );
// // }

import { NavLink } from "react-router-dom";

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
    icon?: string;
    collapsed?: boolean;
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
    collapsed = false,
}: Props) {

    const Icon = icon
        ? icons[icon as keyof typeof icons]
        : null;

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-item active"
                    : "sidebar-item"
            }
        >

            {Icon && <Icon size={20} />}

            {!collapsed && (
                <span>{title}</span>
            )}

        </NavLink>
    );
}