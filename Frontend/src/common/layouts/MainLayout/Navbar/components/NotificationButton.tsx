import "./NotificationButton.css";

import { Bell } from "lucide-react";

export default function NotificationButton() {

    const unreadCount = 5;

    return (

        <button
            className="notification-button"
            title="Notifications"
        >

            <Bell size={20} />

            {

                unreadCount > 0 && (

                    <span className="notification-badge">

                        {unreadCount}

                    </span>

                )

            }

        </button>

    );

}