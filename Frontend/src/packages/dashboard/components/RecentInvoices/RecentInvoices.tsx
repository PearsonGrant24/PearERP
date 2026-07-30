import "./RecentInvoices.css";

import Card from "../Card/Card";

import { ChevronRight } from "lucide-react";

import { recentInvoices } from "../../data/dashboardData";
import CardAction from "../../../../common/ui/CardAction/CardAction";

export default function RecentInvoices() {

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

                                        <span

                                            className={`status ${invoice.status.toLowerCase()}`}

                                        >

                                            {invoice.status}

                                        </span>

                                    </td>

                                    <td>{invoice.amount}</td>

                                    <td>{invoice.date}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </Card>

        </div>

    );

}