import { useEffect, useState } from "react";

import {
    ChevronDown,
    ChevronRight,
    Boxes,
} from "lucide-react";

import { useLocation } from "react-router-dom";

import SidebarItem from "./SidebarItem";

import "./SidebarGroup.css";

type Child = {
    title: string;
    path: string;
};

type Props = {
    title: string;
    path: string;
    icon: string;
    children: Child[];
    collapsed?: boolean;
};

const icons = {
    inventory: Boxes,
};

export default function SidebarGroup({
    title,
    icon,
    children,
    collapsed = false,
}: Props) {

    const location = useLocation();

    const hasActiveChild = children.some(
        child =>
            location.pathname === child.path ||
            location.pathname.startsWith(`${child.path}/`)
    );

    const [open, setOpen] = useState(hasActiveChild);

    useEffect(() => {

        if (hasActiveChild) {
            setOpen(true);
        }

    }, [hasActiveChild]);

    const Icon =
        icons[icon as keyof typeof icons];

    return (

        <div className="sidebar-group">

            <button
                type="button"
                className="sidebar-group-header"
                onClick={() => setOpen(prev => !prev)}
            >

                <div className="left">

                    {Icon && <Icon size={20} />}

                    {!collapsed && (
                        <span>{title}</span>
                    )}

                </div>

                {!collapsed && (
                    open
                        ? <ChevronDown size={18} />
                        : <ChevronRight size={18} />
                )}

            </button>

            {open && !collapsed && (

                <div className="sidebar-children">

                    {children.map(child => (

                        <SidebarItem
                            key={child.title}
                            title={child.title}
                            path={child.path}
                            collapsed={false}
                        />

                    ))}

                </div>

            )}

        </div>

    );
}