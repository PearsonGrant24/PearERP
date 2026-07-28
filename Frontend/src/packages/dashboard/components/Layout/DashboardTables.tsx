import "./DashboardTables.css";

import { ReactNode } from "react";

type Props = {

    children: ReactNode;

};

export default function DashboardTables({

    children,

}: Props) {

    return (

        <div className="dashboard-tables">

            {children}

        </div>

    );

}