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
} from "lucide-react";

export const navigation = [

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
                path: "/sales/quotations",
            },

            {
                title: "Orders",
                path: "/sales/orders",
            },

            {
                title: "Invoices",
                path: "/sales/invoices",
            },

            {
                title: "Payments",
                path: "/sales/payments",
            },

            {
                title: "Returns",
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