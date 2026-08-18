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

import { Navigation } from "../types/Navigation.ts";

export interface NavigationChild {
    title: string;
    path: string;
}

export interface NavigationItem {

    title: string;

    path: string;

    icon: string;

    children?: NavigationChild[];
}

export const navigation: NavigationItem[] = [

    {
        title: "Dashboard",
        path: "/dashboard",
        icon: "dashboard",
    },

    {
        title: "Inventory",
        path: "/inventory",
        icon: "inventory",

        children: [
            {
                title: "Products",
                path: "/inventory/products",
            },

            {
                title: "Categories",
                path: "/inventory/categories",
            },

            {
                title: "Stock Overview",
                path: "/inventory/stock",
            },

            {
                title: "Stock Movements",
                path: "/inventory/movements",
            },
        ],
    },

    {
        title: "Purchasing",
        path: "/purchasing",
        icon: "purchasing",
    },

    {
        title: "Manufacturing",
        path: "/manufacturing",
        icon: "manufacturing",
    },

    {
        title: "Accounting",
        path: "/accounting",
        icon: "accounting",
    },

    {
        title: "CRM",
        path: "/crm",
        icon: "crm",
    },

    {
        title: "HR",
        path: "/hr",
        icon: "hr",
    },

    {
        title: "Reports",
        path: "/reports",
        icon: "reports",
    },

    {
        title: "Settings",
        path: "/settings",
        icon: "settings",
    },

];