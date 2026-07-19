import "./Navbar.css";
import NotificationButton from "./components/NotificationButton";
import SearchBar from "./components/SearchBar";

import SidebarToggle from "./components/SidebarToggle";
import ThemeToggle from "./components/ThemeToggle";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar__left">

                <SidebarToggle/>

            </div>

            <div className="navbar__center">

                <SearchBar/>

            </div>

            <div className="navbar__right">

                <ThemeToggle/>
                <NotificationButton />

            </div>

        </header>

    );

}