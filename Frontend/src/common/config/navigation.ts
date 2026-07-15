import { LayoutDashboard ,
    ShoppingCart,
    Boxes,
    Truck,
    Factory,
    Calculator,
    Users,
    Briefcase,
    FileBarChart,
    Settings,} from "lucide-react";
import { Navigation } from "../types/Navigation.ts";

export interface NavigationItem {
    title: string;
    path: string;
    icon: string;
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
// export const navigation: Navigation[] = [

//     {
//         title: "Dashboard",
//         icon: LayoutDashboard,
//         path: "/dashboard",

//         children: [

            
//         ]
//     },

//     {
//         title: "Sales",
//         icon: ShoppingCart,

//         children: [

//             {
//                 title: "Quotations",
//                icon: FileBarChart,
//                 path: "/sales/quotations",
                
//             },

//             {
//                 title: "Orders",
//                icon: FileBarChart,
//                 path: "/sales/orders",
//             },

//             {
//                 title: "Invoices",
//                icon: FileBarChart,
//                 path: "/sales/invoices",
//             },

//             {
//                 title: "Payments",
//                icon: FileBarChart,
//                 path: "/sales/payments",
//             },

//             {
//                 title: "Returns",
//                icon: FileBarChart,
//                 path: "/sales/returns",
//             }

//         ]

//     },

//     {
//         title: "Inventory",
//        icon: Boxes,
//         path: "/inventory",

//         children: [

//         ]
//     },

//     {
//         title: "Purchasing",
//        icon: Truck,
//         path: "/purchasing",

//         children: [

//         ]
//     },

//     {
//         title: "Manufacturing",
//        icon: Factory,
//         path: "/manufacturing",

//         children: [

//         ]
//     },

//     {
//         title: "Accounting",
//        icon: Calculator,
//         path: "/accounting",

//         children: [

//         ]
//     },

//     {
//         title: "CRM",
//        icon: Users,
//         path: "/crm",

//         children: [

//         ]
//     },

//     {
//         title: "HR",
//        icon: Briefcase,
//         path: "/hr",

//         children: [

//         ]
//     },

//     {
//         title: "Reports",
//         icon: FileBarChart,
//         path: "/reports",

//         children: [

//         ]
//     },

//     {
//         title: "Settings",
//        icon: Settings,
//         path: "/settings",

//         children: [

//         ]
//     }

// ];