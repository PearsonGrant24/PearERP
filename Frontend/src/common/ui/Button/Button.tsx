import "./Button.css";

import { ButtonHTMLAttributes } from "react";

type Variant =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "outline";

type Props =
    ButtonHTMLAttributes<HTMLButtonElement> & {

        variant?: Variant;

        iconOnly?: boolean;

    };

export default function Button({

    children,

    variant = "primary",

    iconOnly = false,

    className = "",

    ...props

}: Props) {

    return (

        <button

            className={
                `button button--${variant}` +
                `${iconOnly ? " button--icon-only" : ""}` +
                ` ${className}`
            }

            {...props}

        >

            {children}

        </button>

    );

}