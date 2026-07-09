import "./SidebarGroup.css";
import SidebarItem from "./SidebarItem.tsx";

type ChildItem = {
    title: string;
    path: string;
};

type SidebarGroupProps = {
    title: string;
    children: ChildItem[];
};

export default function SidebarGroup({
    title,
    children,
}: SidebarGroupProps) {
    return (
        <div className="sidebar-group">

            <div className="sidebar-group__title">
                {title}
            </div>

            <div className="sidebar-group__children">
                {children.map((item) => (
                    <SidebarItem
                        key={item.title}
                        title={item.title}
                    />
                ))}
            </div>

        </div>
    );
}