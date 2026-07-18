import "./SidebarToggle.css";

import {
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";

import { useSidebar } from "../../../../context/SidebarContext";

export default function SidebarToggle() {

    const {
        collapsed,
        toggleSidebar,
    } = useSidebar();

    return (

        <button

            className="sidebar-toggle-btn"

            onClick={toggleSidebar}

        >

            {

                collapsed

                ?

                <PanelLeftOpen size={20}/>

                :

                <PanelLeftClose size={20}/>

            }

        </button>

    );

}