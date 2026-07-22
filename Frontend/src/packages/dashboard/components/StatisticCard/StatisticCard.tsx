import "./StatisticCard.css";

import { ReactNode } from "react";

type Props = {

    title: string;

    value: string;

    subtitle: string;

    color?: "blue" | "green" | "orange" | "red" | "purple";

    icon?: ReactNode;

};

export default function StatisticCard({

    title,

    value,

    subtitle,

    color="blue",

    icon,

}:Props){

    return(

        <div className={`stat-card ${color}`}>

            <div className="stat-card__top">

                <div>

                    <p className="stat-card__title">

                        {title}

                    </p>

                    <h2>{value}</h2>

                </div>

                <div className="stat-card__icon">

                    {icon}

                </div>

            </div>

            <p className="stat-card__subtitle">

                {subtitle}

            </p>

        </div>

    );

}