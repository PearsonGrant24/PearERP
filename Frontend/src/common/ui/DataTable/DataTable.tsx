import "./DataTable.css";

import EmptyState from "../EmptyState/EmptyState";

import { Column } from "./types";

import { useSorting } from "./hooks/useSorting";

import {
    Database,
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
} from "lucide-react";



type TableProps<T extends { id: string | number }> = {

    columns: Column<T>[];

    data: T[];

    selectedRows?: (string | number)[];

    onSelectionChange?: (
        ids: (string | number)[]
    ) => void;

};




export default function DataTable<T extends { id: string | number }>({

    columns,

    data,

    selectedRows,

    onSelectionChange,

}: TableProps<T>) {

    const {

        sortedData,

        sortKey,

        direction,

        requestSort,

    } = useSorting(data);

    const selected = selectedRows ?? [];

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
                                onClick={() => {

                                    if (column.sortable) {

                                        requestSort(column.key);

                                    }

                                }}
                                className={
                                    column.sortable
                                        ? "sortable"
                                        : ""
                                }
                            >

                                <div className="table-header">

                                    {column.header}

                                    {

                                        column.sortable && (

                                            sortKey !== column.key

                                                ? <ArrowUpDown size={15}/>

                                                : direction === "asc"

                                                    ? <ArrowUp size={15}/>

                                                    : <ArrowDown size={15}/>

                                        )

                                    }

                                </div>

                            </th>

                        ))}

                    </tr>

                </thead>

                <tbody>

                    {sortedData.map(row => (

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