import "./DashboardHeader.css";

export default function DashboardHeader() {

    const today = new Date().toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        }
    );

    return (

        <div className="dashboard-header">

            <div>

                <h1>Dashboard</h1>

                <p>

                    Welcome back, Pearson 👋

                </p>

            </div>

            <div className="dashboard-date">

                {today}

            </div>

        </div>

    );

}