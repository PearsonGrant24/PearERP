import "./SidebarItem.css";

type SidebarItemProps = {
    title: string;
};

export default function SidebarItem({
    title,
}: SidebarItemProps) {
    return (
        <div className="sidebar-item">
            {title}
        </div>
    );
}