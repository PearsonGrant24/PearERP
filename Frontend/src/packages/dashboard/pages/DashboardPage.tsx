import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardGrid from "../components/DashboardGrid/DashboardGrid";

//import Card from "../../../common/ui/Card/Card";
import StatisticCard from "../components/StatisticCard/StatisticCard";
import Statistics from "../components/Statistics/Statistcs";
import SalesOverview from "../components/DashboardCharts/SalesOverview/SalesOverview";
import SalesCategory from "../components/DashboardCharts/SalesCategory/SalesCategory";
import DashboardSection from "../../../common/ui/DashboardSection/DashboardSection";
import TopProducts from "../components/DashboardCharts/TopProducts/TopProducts";
import DashboardCharts from "../components/Layout/DashboardCharts";
import DashboardTables from "../components/Layout/DashboardTables";
import RecentInvoices from "../components/RecentInvoices/RecentInvoices";
import RecentActivities from "../components/DashboardTables/RecentActivities/RecentActivities";


export default function DashboardPage() {

    return (

        <>                    
            
            <DashboardHeader />

            <Statistics />

            <DashboardCharts>

                <SalesOverview />

                <SalesCategory />

                <TopProducts />

            </DashboardCharts>

            <DashboardTables>

                <RecentInvoices />

                <RecentActivities/> 

            </DashboardTables>
            
            </>

            );

        }