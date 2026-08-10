export interface Invoice {

    id: string;

    customer: string;

    status: "Paid" | "Pending" | "Overdue";

    amount: string;

    date: string;

}

export const salesData = [
    { month: "Jan", sales: 2200 },
    { month: "Feb", sales: 3100 },
    { month: "Mar", sales: 2800 },
    { month: "Apr", sales: 3900 },
    { month: "May", sales: 4600 },
    { month: "Jun", sales: 4300 },
    { month: "Jul", sales: 5200 },
    { month: "Aug", sales: 6100 },
    { month: "Sep", sales: 5900 },
    { month: "Oct", sales: 7200 },
    { month: "Nov", sales: 6900 },
    { month: "Dec", sales: 8100 },
];

export const categoryData = [
    {
        name: "Kitchenware",
        value: 35,
    },
    {
        name: "Agriculture",
        value: 25,
    },
    {
        name: "Construction",
        value: 18,
    },
    {
        name: "Automotive",
        value: 12,
    },
    {
        name: "Other",
        value: 10,
    },
];

export const topProducts = [
    {
        id: 1,
        name: "PVC Pipe 20mm",
        quantity: "1,250 pcs",
        revenue: "$5,420",
    },

    {
        id: 2,
        name: "Water Tank 500L",
        quantity: "85 pcs",
        revenue: "$4,250",
    },

    {
        id: 3,
        name: "Plastic Bucket 20L",
        quantity: "210 pcs",
        revenue: "$3,150",
    },

    {
        id: 4,
        name: "Garden Hose 1/2\"",
        quantity: "320 m",
        revenue: "$2,850",
    },

    {
        id: 5,
        name: "PVC Elbow 20mm",
        quantity: "950 pcs",
        revenue: "$2,650",
    },
];
// export const recentInvoices: Invoice[] = [

//     {
//         id: "INV-1001",
//         customer: "BuildMart",
//         status: "Paid",
//         amount: 1250,
//         date: "25 Jul 2026",
//     },
export const recentInvoices: Invoice[] = [

    {
        id: "INV-1001",
        customer: "BuildMart",
        status: "Paid",
        amount: "$1,250",
        date: "25 Jul 2026",
    },

    {
        id: "INV-1002",
        customer: "Green Farms",
        status: "Pending",
        amount: "$840",
        date: "24 Jul 2026",
    },

    {
        id: "INV-1003",
        customer: "ABC Plastics",
        status: "Overdue",
        amount: "$2,150",
        date: "22 Jul 2026",
    },

    {
        id: "INV-1004",
        customer: "Delta Hardware",
        status: "Paid",
        amount: "$980",
        date: "21 Jul 2026",
    },

    {
        id: "INV-1005",
        customer: "Harare Builders",
        status: "Pending",
        amount: "$1,450",
        date: "20 Jul 2026",
    },

    {
        id: "INV-1006",
        customer: "Farm Supplies",
        status: "Paid",
        amount: "$2,300",
        date: "19 Jul 2026",
    },

    {
        id: "INV-1007",
        customer: "Prime Hardware",
        status: "Overdue",
        amount: "$760",
        date: "18 Jul 2026",
    },

    {
        id: "INV-1008",
        customer: "Green Valley Farms",
        status: "Paid",
        amount: "$1,890",
        date: "17 Jul 2026",
    },

    {
        id: "INV-1009",
        customer: "City Plastics",
        status: "Pending",
        amount: "$1,120",
        date: "16 Jul 2026",
    },

    {
        id: "INV-1010",
        customer: "BuildRight",
        status: "Paid",
        amount: "$3,250",
        date: "15 Jul 2026",
    },

    {
        id: "INV-1011",
        customer: "Agro Zimbabwe",
        status: "Paid",
        amount: "$1,670",
        date: "14 Jul 2026",
    },

    {
        id: "INV-1012",
        customer: "Metro Hardware",
        status: "Overdue",
        amount: "$920",
        date: "13 Jul 2026",
    },

    {
        id: "INV-1013",
        customer: "Sunrise Farms",
        status: "Pending",
        amount: "$2,450",
        date: "12 Jul 2026",
    },

    {
        id: "INV-1014",
        customer: "Plastic World",
        status: "Paid",
        amount: "$1,380",
        date: "11 Jul 2026",
    },

    {
        id: "INV-1015",
        customer: "Central Builders",
        status: "Paid",
        amount: "$2,100",
        date: "10 Jul 2026",
    },

    {
        id: "INV-1016",
        customer: "AgriMart",
        status: "Pending",
        amount: "$870",
        date: "09 Jul 2026",
    },

    {
        id: "INV-1017",
        customer: "Hardware Hub",
        status: "Overdue",
        amount: "$1,560",
        date: "08 Jul 2026",
    },

    {
        id: "INV-1018",
        customer: "FarmTech",
        status: "Paid",
        amount: "$2,780",
        date: "07 Jul 2026",
    },

    {
        id: "INV-1019",
        customer: "ABC Construction",
        status: "Pending",
        amount: "$1,050",
        date: "06 Jul 2026",
    },

    {
        id: "INV-1020",
        customer: "Prime Plastics",
        status: "Paid",
        amount: "$1,940",
        date: "05 Jul 2026",
    },

    {
        id: "INV-1021",
        customer: "Delta Farms",
        status: "Paid",
        amount: "$2,320",
        date: "04 Jul 2026",
    },

    {
        id: "INV-1022",
        customer: "Harare Hardware",
        status: "Pending",
        amount: "$690",
        date: "03 Jul 2026",
    },

    {
        id: "INV-1023",
        customer: "BuildPro",
        status: "Overdue",
        amount: "$1,780",
        date: "02 Jul 2026",
    },

    {
        id: "INV-1024",
        customer: "Agro Supplies",
        status: "Paid",
        amount: "$2,650",
        date: "01 Jul 2026",
    },

];



export const recentActivities = [

    {
        id: 1,
        title: "John approved Purchase Order #1023",
        time: "5 min ago",
        type: "purchase",
    },

    {
        id: 2,
        title: "Sales Invoice INV-1005 created",
        time: "20 min ago",
        type: "sales",
    },

    {
        id: 3,
        title: "Production Order #301 completed",
        time: "1 hour ago",
        type: "manufacturing",
    },

    {
        id: 4,
        title: "Inventory adjusted (+120 PVC Pipes)",
        time: "2 hours ago",
        type: "inventory",
    },

    {
        id: 5,
        title: 'Mary created customer "ABC Plastics"',
        time: "Yesterday",
        type: "customer",
    },

];
