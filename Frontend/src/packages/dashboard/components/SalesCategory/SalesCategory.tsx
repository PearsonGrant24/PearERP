import "./SalesCategory.css";

import Card from "../../../../common/ui/Card/Card";

import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Cell,

    Tooltip,

    Legend,
    
    Label,

} from "recharts";

import {

    categoryData,

} from "../../data/dashboardData";

const COLORS = [

    "#3B82F6",

    "#10B981",

    "#F59E0B",

    "#EF4444",

    "#8B5CF6",

];

export default function SalesCategory() {

    return (

        <Card title="Sales Category">

            <div className="sales-category">

                <ResponsiveContainer

                    width="100%"

                    height={320}

                >

                    <PieChart>

                        <Pie

                            data={categoryData}

                            dataKey="value"

                            nameKey="name"

                            innerRadius={70}

                            outerRadius={100}

                            paddingAngle={3}

                        >

                            {

                                categoryData.map((entry, index) => (

                                    <Cell

                                        key={index}

                                        fill={COLORS[index % COLORS.length]}

                                    />

                                ))

                            }
                            <Label
    value="100%"
    position="center"
    style={{
        fontSize: "24px",
        fontWeight: 700,
        fill: "#111827",
    }}
/>

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </Card>

    );

}