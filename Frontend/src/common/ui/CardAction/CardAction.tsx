import "./CardAction.css";

import { ChevronRight } from "lucide-react";

type Props = {

    label: string;

    onClick?: () => void;

};

export default function CardAction({

    label,

    onClick,

}: Props) {

    return (

        <button

            className="card-action"

            onClick={onClick}

        >

            {label}

            <ChevronRight size={16} />

        </button>

    );

}