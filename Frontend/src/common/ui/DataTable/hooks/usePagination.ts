import { useMemo, useState } from "react";

type UsePaginationProps = {
    totalItems: number;
    initialPageSize?: number;
};

export function usePagination({

    totalItems,

    initialPageSize = 10,

}: UsePaginationProps) {

    const [currentPage, setCurrentPage] = useState(1);

    const [pageSize, setPageSize] =
        useState(initialPageSize);

    const totalPages =
        Math.max(
            1,
            Math.ceil(totalItems / pageSize)
        );

    const startIndex =
        (currentPage - 1) * pageSize;

    const endIndex =
        startIndex + pageSize;

    const goToPage = (page: number) => {

        setCurrentPage(
            Math.min(
                Math.max(page, 1),
                totalPages
            )
        );

    };

    const nextPage = () => {

        setCurrentPage(page =>
            Math.min(page + 1, totalPages)
        );

    };

    const previousPage = () => {

        setCurrentPage(page =>
            Math.max(page - 1, 1)
        );

    };

    const changePageSize = (size: number) => {

        setPageSize(size);

        setCurrentPage(1);

    };

    return {

        currentPage,

        pageSize,

        totalPages,

        startIndex,

        endIndex,

        goToPage,

        nextPage,

        previousPage,

        changePageSize,

    };

}