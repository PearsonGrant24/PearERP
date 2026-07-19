import "./ThemeToggle.css";

import {
    Sun,
    Moon,
} from "lucide-react";

import { useState } from "react";

export default function ThemeToggle() {

    const [dark, setDark] = useState(false);

    return (

        <button

            className="theme-toggle"

            onClick={() => setDark(!dark)}

            title="Toggle Theme"

        >

            {

                dark

                ?

                <Moon size={20} />

                :

                <Sun size={20} />

            }

        </button>

    );

}