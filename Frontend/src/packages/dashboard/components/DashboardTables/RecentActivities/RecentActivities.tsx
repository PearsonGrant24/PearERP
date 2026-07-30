
import CardAction from "../../../../../common/ui/CardAction/CardAction";
import { recentActivities } from "../../../data/dashboardData";
import Card from "../../Card/Card";
import "./RecentActivities.css";


import {
    ShoppingCart,
    Boxes,
    Factory,
    Truck,
    Users,
} from "lucide-react";

const icons = {
    sales: ShoppingCart,
    inventory: Boxes,
    manufacturing: Factory,
    purchase: Truck,
    customer: Users,
};

export default function RecentActivities() {

    return (

        <div className="recent-activities">

            <Card
                title="Recent Activities"
                action={<CardAction label="View All" />}
            >

                <div className="activities">

                    {

                        recentActivities.map(activity => {

                            const Icon =
                                icons[
                                    activity.type as keyof typeof icons
                                ];

                            return (

                                <div
                                    key={activity.id}
                                    className="activity"
                                >

                                    <div className="activity__icon">

                                        <Icon size={18} />

                                    </div>

                                    <div className="activity__content">

                                        <div className="activity__title">

                                            {activity.title}

                                        </div>

                                        <div className="activity__time">

                                            {activity.time}

                                        </div>

                                    </div>

                                </div>

                            );

                        })

                    }

                </div>

            </Card>

        </div>

    );

}