import {
    LayoutDashboard,
    ShoppingCart,
    Boxes,
    Truck,
    Factory,
    Calculator,
    Users,
    Briefcase,
    FileBarChart,
    Settings,
    Import,
} from "lucide-react";

import { Navigation } from "../types/Navigation.ts";

export const navigation: Navigation[] = [

    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },

    {
        title: "Sales",
        icon: ShoppingCart,

        children: [

            {
                title: "Quotations",
                icon: FileBarChart,
                path: "/sales/quotations",
                
            },

            {
                title: "Orders",
                icon: FileBarChart,
                path: "/sales/orders",
            },

            {
                title: "Invoices",
                icon: FileBarChart,
                path: "/sales/invoices",
            },

            {
                title: "Payments",
                icon: FileBarChart,
                path: "/sales/payments",
            },

            {
                title: "Returns",
                icon: FileBarChart,
                path: "/sales/returns",
            }

        ]

    },

    {
        title: "Inventory",
        icon: Boxes,
        path: "/inventory",
    },

    {
        title: "Purchasing",
        icon: Truck,
        path: "/purchasing",
    },

    {
        title: "Manufacturing",
        icon: Factory,
        path: "/manufacturing",
    },

    {
        title: "Accounting",
        icon: Calculator,
        path: "/accounting",
    },

    {
        title: "CRM",
        icon: Users,
        path: "/crm",
    },

    {
        title: "HR",
        icon: Briefcase,
        path: "/hr",
    },

    {
        title: "Reports",
        icon: FileBarChart,
        path: "/reports",
    },

    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    }

];