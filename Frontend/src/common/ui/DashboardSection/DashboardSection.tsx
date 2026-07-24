import "./DashboardSection.css";

import { ReactNode } from "react";

type Props = {

    children: ReactNode;

};

export default function DashboardSection({

    children,

}: Props) {

    return (

        <div className="dashboard-section">

            {children}

        </div>

    );

}