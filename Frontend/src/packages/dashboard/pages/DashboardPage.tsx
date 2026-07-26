import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardGrid from "../components/DashboardGrid/DashboardGrid";

//import Card from "../../../common/ui/Card/Card";
import StatisticCard from "../components/StatisticCard/StatisticCard";
import Statistics from "../components/Statistics/Statistcs";
import SalesOverview from "../components/SalesOverview/SalesOverview";
import SalesCategory from "../components/SalesCategory/SalesCategory";
import DashboardSection from "../../../common/ui/DashboardSection/DashboardSection";
import TopProducts from "../components/TopProducts/TopProducts";

export default function DashboardPage() {

    return (

        <>                    
            <DashboardHeader/>

            <Statistics/>
            
            <div className="dashboard-grid">

                <DashboardSection>

                <SalesOverview/>

                <SalesCategory/>

                </DashboardSection>

                <TopProducts/>
            </div>
            
            </>

            );

        }