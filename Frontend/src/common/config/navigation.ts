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

        children: [

            
        ]
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

        children: [

        ]
    },

    {
        title: "Purchasing",
        icon: Truck,
        path: "/purchasing",

        children: [

        ]
    },

    {
        title: "Manufacturing",
        icon: Factory,
        path: "/manufacturing",

        children: [

        ]
    },

    {
        title: "Accounting",
        icon: Calculator,
        path: "/accounting",

        children: [

        ]
    },

    {
        title: "CRM",
        icon: Users,
        path: "/crm",

        children: [

        ]
    },

    {
        title: "HR",
        icon: Briefcase,
        path: "/hr",

        children: [

        ]
    },

    {
        title: "Reports",
        icon: FileBarChart,
        path: "/reports",

        children: [

        ]
    },

    {
        title: "Settings",
        icon: Settings,
        path: "/settings",

        children: [

        ]
    }

];