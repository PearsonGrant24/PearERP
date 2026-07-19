import "./Navbar.css";
import LanguageSelector from "./components/LanguageSelector";
import NotificationButton from "./components/NotificationButton";
import SearchBar from "./components/SearchBar";

import SidebarToggle from "./components/SidebarToggle";
import ThemeToggle from "./components/ThemeToggle";
import UserMenu from "./components/UserMenu";

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

                <LanguageSelector />

                <UserMenu />

            </div>

        </header>

    );

}