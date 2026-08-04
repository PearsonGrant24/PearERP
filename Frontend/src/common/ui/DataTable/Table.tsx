import "./Table.css";

import EmptyState from "../EmptyState/EmptyState";

import { Database } from "lucide-react";

import { Column } from "./types";

type TableProps<T extends { id: string | number }> = {

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

                icon={<Database size={40}/>}

                title="No data found"

                description="There are no records to display."

            />

        );

    }

    return (

        <div className="table-container">

            <table className="table">

                <thead>

                    <tr>

                        {columns.map(column => (

                            <th

                                key={String(column.key)}

                                style={{

                                    width: column.width,

                                    textAlign: column.align ?? "left",

                                }}

                            >

                                {column.header}

                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {data.map(row => (

                        <tr key={row.id}>

                            {columns.map(column => (

                                <td

                                    key={String(column.key)}

                                    style={{

                                        textAlign: column.align ?? "left",

                                    }}

                                >

                                    {column.render

                                        ? column.render(row)

                                        : String(row[column.key])}

                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}