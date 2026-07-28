import "./DashboardCharts.css";

import { ReactNode } from "react";

type Props = {

    children: ReactNode;

};

export default function DashboardCharts({

    children,

}: Props) {

    return (

        <div className="dashboard-charts">

            {children}

        </div>

    );

}