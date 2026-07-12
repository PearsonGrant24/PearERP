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

import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";

type Props = {
    title: string;
    path: string;
    icon: LucideIcon;
};

export default function SidebarItem({
    title,
    path,
    icon: Icon,
}: Props) {

    console.log("Icon:", Icon);
    console.log("Type:", typeof Icon);

    return (
        <NavLink to={path}>
            <span>{title}</span>
        </NavLink>
    );
}