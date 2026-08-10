import "./DataTable.css";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

type DataTablePaginationProps = {

    currentPage: number;

    totalPages: number;

    totalItems: number;

    pageSize: number;

    startIndex: number;

    endIndex: number;

    onPrevious: () => void;

    onNext: () => void;

    onPageChange: (page: number) => void;

};

export default function DataTablePagination({

    currentPage,

    totalPages,

    totalItems,

    pageSize,

    startIndex,

    endIndex,

    onPrevious,

    onNext,

    onPageChange,

}: DataTablePaginationProps) {

    if (totalItems === 0) {
        return null;
    }

    const startItem =
        startIndex + 1;

    const endItem =
        Math.min(endIndex, totalItems);

    return (

        <div className="data-table-pagination">

            <div className="data-table-pagination__info">

                Showing{" "}

                <strong>
                    {startItem}
                </strong>

                {" – "}

                <strong>
                    {endItem}
                </strong>

                {" of "}

                <strong>
                    {totalItems}
                </strong>

            </div>

            <div className="data-table-pagination__controls">

                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={onPrevious}
                    className="pagination-button"
                    aria-label="Previous page"
                >
                    <ChevronLeft size={18} />
                </button>

                <span className="pagination-page">

                    Page {currentPage} of {totalPages}

                </span>

                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={onNext}
                    className="pagination-button"
                    aria-label="Next page"
                >
                    <ChevronRight size={18} />
                </button>

            </div>

        </div>

    );

}