import "./Table.css";

import EmptyState from "../EmptyState/EmptyState";

import { Package } from "lucide-react";

import { Column } from "./types";

type TableProps<T> = {

    columns: Column<T>[];

    data: T[];

};

export default function Table<T extends { id: string | number }>({

    columns,

    data,

}: TableProps<T>) {

    if (data.length === 0) {

        return (

            <EmptyState

                icon={<Package size={36} />}

                title="No Data"

                description="Nothing to display."

            />

        );

    }

    return (

        <div className="table-container">

            <table className="table">

                <thead>

                    <tr>

                        {

                            columns.map(column => (

                                <th key={String(column.key)}>

                                    {column.header}

                                </th>

                            ))

                        }

                    </tr>

                </thead>

                <tbody>

                    {

                        data.map(row => (

                            <tr key={row.id}>

                                {

                                    columns.map(column => (

                                        <td key={String(column.key)}>

                                            {

                                                column.render

                                                ?

                                                column.render(row)

                                                :

                                                String(row[column.key])

                                            }

                                        </td>

                                    ))

                                }

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}