import DataTable, {
    DataTableToolbar
} from "../../../../common/ui/DataTable";
import Button from "../../../../common/ui/Button/Button"
import "./RecentInvoices.css";
import { useState } from "react";
import Card from "../Card/Card";

import { recentInvoices } from "../../data/dashboardData";
import CardAction from "../../../../common/ui/CardAction/CardAction";
import Badge from "../../../../common/ui/Badge/Badge";
// import DataTable from "../../../../common/ui/DataTable/DataTable";
import { Column } from "../../../../common/ui/DataTable/types";
import { Invoice } from "../../data/dashboardData";
import {
    Trash2,
    Printer,
    Download,
} from "lucide-react";


export default function RecentInvoices() {

    const [invoices, setInvoices] = useState(recentInvoices);

    function handleDelete() {

        setInvoices(currentInvoices =>
            currentInvoices.filter(
                invoice =>
                    !selectedInvoices.includes(invoice.id)
            )
        );

        setSelectedInvoices([]);

    }

    function handleExport() {

        console.log(
            "Exporting invoices:",
            selectedInvoices
        );

    }

    function handlePrint() {

    console.log(
        "Printing invoices:",
        selectedInvoices
    );

}

    const [selectedInvoices, setSelectedInvoices] = useState<
        (string | number)[]
    >([]);

     const columns: Column<Invoice>[] = [
        {
            key: "id",
            header: "Invoice",
            sortable: true,
        },
        {
    key: "customer",
    header: "Customer",
    sortable: true,
},
{
    key: "status",
    header: "Status",
    render: (row) => (
        <Badge
            variant={
                row.status === "Paid"
                    ? "success"
                    : row.status === "Pending"
                    ? "warning"
                    : "danger"
            }
        >
            {row.status}
        </Badge>
    ),
},
{
    key: "amount",
    header: "Amount",
    sortable: true,
},
{
    key: "date",
    header: "Date",
    sortable: true,
},
    ];

    return (

        <div className="recent-invoices">

            <Card
                title="Recent Invoices"
                action={
                    <CardAction
                        label="View All"
                    />
            }
            >

            <DataTableToolbar
                selectedCount={selectedInvoices.length}
            >
                <Button
                    iconOnly
                    variant="outline"
                    title="Export"
                    aria-label="Export selected invoices"
                    onClick={handleExport}
                >
                    <Download size={18} />
                </Button>

                <Button
                    iconOnly
                    variant="outline"
                    title="Print"
                    aria-label="Print selected invoices"
                    onClick={handlePrint}
                >
                    <Printer size={18} />
                </Button>

                <Button 
                    iconOnly
                    variant="danger"
                    aria-label="Delete selected invoices"
                    onClick={handleDelete}
                    title="Delete"
                >
                    <Trash2 size={16} />
                </Button>
            </DataTableToolbar>

            <DataTable
                columns={columns}
                data={invoices}
                selectedRows={selectedInvoices}
                onSelectionChange={setSelectedInvoices}
                pageSize={5}
            />
         
            </Card>
        </div>
    );
}