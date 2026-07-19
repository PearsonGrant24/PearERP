import "./LanguageSelector.css";

import { Globe, ChevronDown } from "lucide-react";

export default function LanguageSelector() {

    return (

        <button
            className="language-selector"
            title="Select Language"
        >

            <Globe size={18} />

            <span>EN</span>

            <ChevronDown size={16} />

        </button>

    );

}