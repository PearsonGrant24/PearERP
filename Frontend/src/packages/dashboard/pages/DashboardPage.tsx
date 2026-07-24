import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardGrid from "../components/DashboardGrid/DashboardGrid";

//import Card from "../../../common/ui/Card/Card";
import StatisticCard from "../components/StatisticCard/StatisticCard";
import Statistics from "../components/Statistics/Statistcs";
import SalesOverview from "../components/SalesOverview/SalesOverview";
import SalesCategory from "../components/SalesCategory/SalesCategory";

export default function DashboardPage() {

    return (

        <>

            {/* <DashboardHeader />

            <DashboardGrid>

            <StatisticCard

                title="Revenue"

                value="$4,530"

            />

            <StatisticCard

                title="Orders"

                value="48"

            />

            <StatisticCard

                title="Outstanding Quotes"

                value="12"

            />

            <StatisticCard

                title="Low Stock"

                value="6"

            />

        </DashboardGrid>

                </> */}
            {/* <DashboardGrid> */}

                <DashboardHeader/>

                <Statistics/>
                <SalesOverview/>
                <SalesCategory />
              {/*  <TopProducts/> */}
            {/* </DashboardGrid> */}
{/*</><Analytics/>

<BusinessOverview/>*/}</>

            );

        }