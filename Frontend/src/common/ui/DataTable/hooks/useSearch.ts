import { useMemo, useState } from "react";

type UseSearchProps<T> = {
    data: T[];
    searchableKeys: (keyof T)[];
};

export function useSearch<T>({
    data,
    searchableKeys,
}: UseSearchProps<T>) {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = useMemo(() => {

        if (!searchTerm.trim()) {
            return data;
        }

        const search = searchTerm
            .toLowerCase()
            .trim();

        return data.filter(row => {

            return searchableKeys.some(key => {

                const value = row[key];

                if (value === null || value === undefined) {
                    return false;
                }

                return String(value)
                    .toLowerCase()
                    .includes(search);

            });

        });

    }, [data, searchTerm, searchableKeys]);

    return {

        searchTerm,

        setSearchTerm,

        filteredData,

    };

}