import "./Button.css";
import { ButtonHTMLAttributes } from "react";

type Variant =

    | "primary"

    | "secondary"

    | "success"

    | "danger"

    | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {

    variant?: Variant;

};

export default function Button({

    children,
    variant = "primary",
    className = "",
    ...props

}: Props) {

    return (

        <button
            className={
                `button button--${variant} ${className}`
            }
            {...props}
        >
            {children}
        </button>
    );

}