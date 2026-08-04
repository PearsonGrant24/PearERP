import { useMemo, useState } from "react";

export type SortDirection = "asc" | "desc";

export function useSorting<T>(data: T[]) {

    const [sortKey, setSortKey] = useState<keyof T | null>(null);

    const [direction, setDirection] =
        useState<SortDirection>("asc");

    const sortedData = useMemo(() => {

        if (!sortKey) return data;

        return [...data].sort((a, b) => {

            const valueA = a[sortKey];
            const valueB = b[sortKey];

            if (valueA < valueB)
                return direction === "asc" ? -1 : 1;

            if (valueA > valueB)
                return direction === "asc" ? 1 : -1;

            return 0;

        });

    }, [data, sortKey, direction]);

    function requestSort(key: keyof T) {

        if (sortKey === key) {

            setDirection(prev =>
                prev === "asc"
                    ? "desc"
                    : "asc"
            );

        } else {

            setSortKey(key);

            setDirection("asc");

        }

    }

    return {

        sortedData,

        sortKey,

        direction,

        requestSort,

    };

}