import "./Card.css";

import { ReactNode } from "react";

type CardProps = {

    children: ReactNode;

    title?: string;

    subtitle?: string;

    footer?: ReactNode;

    action?: ReactNode;

};

export default function Card({

    children,

    title,

    subtitle,

    footer,

    action,

}: CardProps) {

    return (

        <div className="card">

            {(title || subtitle) && (

                <div className="card__header">

                    <div>

                        {title && (

                            <h3 className="card__title">

                                {title}

                            </h3>

                        )}

                        {subtitle && (

                            <p className="card__subtitle">

                                {subtitle}

                            </p>

                        )}

                    </div>

                    {action && (

                        <div className="card__action">

                            {action}

                        </div>

                    )}

                </div>

            )}

            <div className="card__body">

                {children}

            </div>

            {footer && (

                <div className="card__footer">

                    {footer}

                </div>

            )}

        </div>

    );

}