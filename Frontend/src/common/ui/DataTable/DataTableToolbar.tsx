import "./DataTable.css";

import { ReactNode } from "react";

type DataTableToolbarProps = {

    selectedCount: number;

    children?: ReactNode;

};

export default function DataTableToolbar({

    selectedCount,

    children,

}: DataTableToolbarProps) {

    if (selectedCount === 0) {
        return null;
    }

    return (

        <div className="data-table-toolbar">

            <div className="data-table-selection">

                <strong>
                    {selectedCount}
                </strong>

                <span>
                    {selectedCount === 1
                        ? "item selected"
                        : "items selected"}
                </span>

            </div>

            <div className="data-table-actions">

                {children}

            </div>

        </div>

    );

}