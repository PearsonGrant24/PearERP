import "./CardHeader.css";

import { ReactNode } from "react";

type CardHeaderProps = {

    title: string;

    subtitle?: string;

    action?: ReactNode;

};

export default function CardHeader({

    title,

    subtitle,

    action,

}: CardHeaderProps) {

    return (

        <div className="card-header">

            <div className="card-header__content">

                <h3 className="card-header__title">

                    {title}

                </h3>

                {

                    subtitle && (

                        <p className="card-header__subtitle">

                            {subtitle}

                        </p>

                    )

                }

            </div>

            {

                action && (

                    <div className="card-header__action">

                        {action}

                    </div>

                )

            }

        </div>

    );

}