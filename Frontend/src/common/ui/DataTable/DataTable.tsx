import "./DataTable.css";
import { useEffect, useRef } from "react";
import EmptyState from "../EmptyState/EmptyState";

import { Column } from "./types";
import { useSorting } from "./hooks/useSorting";

import {
    Database,
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
    Search,
} from "lucide-react";

import DataTablePagination from "./DataTablePagination";

import { usePagination } from "./hooks/usePagination";
import { useSearch } from "./hooks/useSearch";


type TableProps<T extends { id: string | number }> = {

    columns: Column<T>[];

    data: T[];

    selectedRows?: (string | number)[];

    onSelectionChange?: (
        ids: (string | number)[]
    ) => void;

    pageSize?: number;

     searchableKeys?: (keyof T)[];
};

export default function DataTable<T extends { id: string | number }>({

    columns,

    data,

    selectedRows,

    onSelectionChange,

    pageSize = 10,

    searchableKeys = [],
    
}: TableProps<T>) {

    const {
        searchTerm,
        setSearchTerm,
        filteredData,
    } = useSearch({

        data,

        searchableKeys,

    });



    
    
//  }, [searchTerm, goToPage]);


    const {

        sortedData,

        sortKey,

        direction,

        requestSort,

    } = useSorting(filteredData);

    

    const {
        currentPage,
        pageSize: currentPageSize,
        totalPages,
        startIndex,
        endIndex,
        goToPage,
        nextPage,
        previousPage,
    } = usePagination({
        totalItems: sortedData.length,
        initialPageSize: pageSize,
        resetKey: searchTerm,
    });

    const paginatedData =
    sortedData.slice(
        startIndex,
        endIndex
    );    

    const selected = selectedRows ?? [];

    const selectAllRef = useRef<HTMLInputElement>(null);

    const allSelected =
        data.length > 0 &&
        selected.length === data.length;

    const someSelected =
        selected.length > 0 &&
        !allSelected;
        
    useEffect(() => {

        if (selectAllRef.current) {

            selectAllRef.current.indeterminate =
                someSelected;

        }

    }, [someSelected]);

    function toggleAll() {

        if (!onSelectionChange) return;

        if (allSelected) {

            onSelectionChange([]);

        } else {

            onSelectionChange(
                data.map(row => row.id)
            );

        }

    }

    function toggleRow(id: string | number) {

        if (!onSelectionChange) return;

        if (selected.includes(id)) {

            onSelectionChange(
                selected.filter(item => item !== id)
            );

        } else {

            onSelectionChange([
                ...selected,
                id,
            ]);

            }

        }

    
    

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

            <div className="data-table-toolbar">

                <div className="data-table-search">

                    <Search size={18} />

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                        placeholder="Search..."
                    />

                </div>

            </div>

            <table className="table">                

                <thead>

                    <tr>
                        <th className="checkbox-column">

                            <input
                                ref={selectAllRef}
                                type="checkbox"
                                checked={allSelected}
                                onChange={toggleAll}
                            />

                        </th>
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

                    {/* {sortedData.map(row => ( */}
                    {paginatedData.map(row => (
                        <tr key={row.id}
                        className={
                            selected.includes(row.id)
                                ? "selected"
                                : ""
                            }
                        >

                            <td className="checkbox-column">

                                <input
                                    type="checkbox"
                                    checked={selected.includes(row.id)}
                                    onChange={() => toggleRow(row.id)}
                                />

                            </td>

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

                <DataTablePagination

                    currentPage={currentPage}

                    totalPages={totalPages}

                    totalItems={sortedData.length}

                    pageSize={currentPageSize}

                    startIndex={startIndex}

                    endIndex={endIndex}

                    onPrevious={previousPage}

                    onNext={nextPage}

                    onPageChange={goToPage}

                />
                

        </div>
    );
}