import "./SalesOverview.css";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip,
    YAxis,
} from "recharts";

// import Card from "../../../common/components/Card/Card";
import Card from "../Card/Card"
// import Card from "../../../../common/ui/Card/Card"

// import { salesData } from "../data/dashboardData";
import { salesData } from "../../data/dashboardData";

export default function SalesOverview() {

    return (

        <Card title="Sales Overview">

            <div className="sales-overview">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart data={salesData}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis dataKey="month" />
                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#3b82f6"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div> 

        </Card>

    );

}