import "./Badge.css";

import { ReactNode } from "react";

type BadgeVariant =
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "primary"
    | "gray";

type BadgeProps = {
    children: ReactNode;
    variant?: BadgeVariant;
};

export default function Badge({
    children,
    variant = "gray",
}: BadgeProps) {
    return (
        <span className={`badge badge--${variant}`}>
            {children}
        </span>
    );
}