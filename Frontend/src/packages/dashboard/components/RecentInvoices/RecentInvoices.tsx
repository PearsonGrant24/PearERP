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
                    onClick={handleExport}
                >
                    Export
                </Button>

                <Button
                    onClick={handlePrint}
                >
                    Print
                </Button>

                <Button 
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </DataTableToolbar>

            <DataTable
                columns={columns}
                data={invoices}
                selectedRows={selectedInvoices}
                onSelectionChange={setSelectedInvoices}
            />
            
            {/* <div className="card__body">
                <table className="invoice-table">

                    <thead>

                        <tr>

                            <th>Invoice</th>

                            <th>Customer</th>

                            <th>Status</th>

                            <th>Amount</th>

                            <th>Date</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            recentInvoices.map(invoice => (

                                <tr key={invoice.id}>

                                    <td>{invoice.id}</td>

                                    <td>{invoice.customer}</td>

                                    <td>
                                        <Badge
                                            variant={
                                                invoice.status === "Paid"
                                                    ? "success"
                                                    : invoice.status === "Pending"
                                                    ? "warning"
                                                    : "danger"
                                            }
                                        >
                                            {invoice.status}
                                        </Badge>
                                    </td>

                                    <td>{invoice.amount}</td>

                                    <td>{invoice.date}</td>

                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div> */}
            </Card>
        </div>
    );
}