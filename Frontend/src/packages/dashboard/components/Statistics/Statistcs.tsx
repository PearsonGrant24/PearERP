import "./Statistics.css";
import {
    DollarSign,
    TrendingUp,
    FileText,
    Package,
    Users,
} from "lucide-react";
import StatisticCard from "../StatisticCard/StatisticCard";

export default function Statistics() {
    return (
        <section className="statistics">

            <StatisticCard
                title="Total Sales"
                value="$34,520"                
                subtitle="+12.5% from last month"
                color="blue"
                icon={<DollarSign size={24} color="white" />}
            />

            <StatisticCard
                title="Total Profit"
                value="$8,450"
                subtitle="+8.2% from last month"
                color="green"
                icon={<TrendingUp size={24} color="white" />}
            />

            <StatisticCard
                title="Outstanding Invoices"
                value="17"
                subtitle="$12,650 pending"
                color="orange"
                icon={<FileText size={24} color="white" />}
            />

            <StatisticCard
                title="Low Stock Items"
                value="23"
                subtitle="Needs attention"
                color="red"
                icon={<Package size={24} color="white" />}
            />

            <StatisticCard
                title="Total Customers"
                value="156"
                subtitle="+5 this month"
                color="purple"
                icon={<Users size={24} color="white" />}
            />

        </section>
    );
}