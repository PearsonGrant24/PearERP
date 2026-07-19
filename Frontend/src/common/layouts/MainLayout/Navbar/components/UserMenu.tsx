import { useState, useRef, useEffect } from "react";

import {
    User,
    Settings,
    LogOut,
    ChevronDown,
} from "lucide-react";

import "./UserMenu.css";

export default function UserMenu() {

    const [open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    return (

        <div
            className="user-menu"
            ref={menuRef}
        >

            <button
                className="user-menu__button"
                onClick={() => setOpen(!open)}
            >

                <div className="user-avatar">

                    PG

                </div>

                <div className="user-info">

                    <strong>Pearson Grant</strong>

                    <span>Administrator</span>

                </div>

                <ChevronDown size={16}/>

            </button>

            {

                open && (

                    <div className="user-dropdown">

                        <button>

                            <User size={18}/>

                            Profile

                        </button>

                        <button>

                            <Settings size={18}/>

                            Settings

                        </button>

                        <hr/>

                        <button className="logout">

                            <LogOut size={18}/>

                            Logout

                        </button>

                    </div>

                )

            }

        </div>

    );

}