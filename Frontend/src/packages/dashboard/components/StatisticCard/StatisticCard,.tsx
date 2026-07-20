import Card from "../../../../common/ui/Card/Card";

import "./StatisticCard.css";

type Props={

    title:string;

    value:string;

};

export default function StatisticCard({

    title,

    value,

}:Props){

    return(

        <div className="statistic-card">

            <Card

                title={title}

            >

                <h2>{value}</h2>

            </Card>

        </div>

    );

}