import "./Navbar.css";

import SidebarToggle from "./components/SidebarToggle";

export default function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar__left">

                <SidebarToggle/>

            </div>

            <div className="navbar__center">

                Center

            </div>

            <div className="navbar__right">

                Right

            </div>

        </header>

    );

}