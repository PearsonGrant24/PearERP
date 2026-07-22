import "./Statistics.css";

import StatisticCard from "../StatisticCard/StatisticCard";

export default function Statistics() {
    return (
        <section className="statistics">

            <StatisticCard
                title="Total Sales"
                value="$34,520"                
                subtitle="+12.5% from last month"
                color="blue"
            />

            <StatisticCard
                title="Total Profit"
                value="$8,450"
                subtitle="+8.2% from last month"
                color="green"
            />

            <StatisticCard
                title="Outstanding Invoices"
                value="17"
                subtitle="$12,650 pending"
                color="orange"
            />

            <StatisticCard
                title="Low Stock Items"
                value="23"
                subtitle="Needs attention"
                color="red"
            />

            <StatisticCard
                title="Total Customers"
                value="156"
                subtitle="+5 this month"
                color="purple"
            />

        </section>
    );
}