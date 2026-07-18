import "./SearchBar.css";

import {
    Search,
    Command,
} from "lucide-react";

export default function SearchBar() {

    return (

        <div className="searchbar">

            <Search
                size={18}
                className="searchbar__icon"
            />

            <input

                type="text"

                placeholder="Search customers, invoices, products..."

            />

            <div className="searchbar__shortcut">

                <Command size={14}/>

                <span>K</span>

            </div>

        </div>

    );

}