import { ReactNode } from "react";

export type Column<T> = {

    key: keyof T;

    header: string;

    width?: string;

    align?: "left" | "center" | "right";

    render?: (row: T) => ReactNode;

};