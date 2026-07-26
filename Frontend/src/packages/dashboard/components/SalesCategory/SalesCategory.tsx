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

        <div className="sales-category">
        <Card title="Sales Category">

            <div className="sales-category">

                 <div className="sales-category__chart">


                <ResponsiveContainer

                    width="100%"

                    height={300}

                >

                    <PieChart>

                        <Pie

                            data={categoryData}

                            dataKey="value"

                            nameKey="name"

                            innerRadius={60}

                            outerRadius={88}

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
                                value="126k"
                                position="center"
                                style={{
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    fill: "#111827",
                                }}
                            />

                        </Pie>

                        <Tooltip />

                        {/* <Legend /> */}

                    </PieChart>

                </ResponsiveContainer>
                </div>

                <div className="sales-category__legend">

                    {categoryData.map((item, index) => (

                        <div
                            key={item.name}
                            className="legend-item"
                        >

                            <span
                                className="legend-color"
                                style={{
                                    background: COLORS[index],
                                }}
                            />

                            <span>{item.name}</span>

                            <strong>{item.value}%</strong>

                        </div>

                    ))}

                </div>

            </div>

        </Card>
        </div>
    );

}