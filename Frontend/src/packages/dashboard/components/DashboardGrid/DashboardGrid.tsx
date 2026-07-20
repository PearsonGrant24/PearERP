import "./DashboardGrid.css";

import { ReactNode } from "react";

type Props = {

    children: ReactNode;

};

export default function DashboardGrid({

    children,

}: Props) {

    return (

        <div className="dashboard-grid">

            {children}

        </div>

    );

}