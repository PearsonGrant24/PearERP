import "./Sidebar.css";
import { navigation } from "../../config/navigation";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__logo">
                <h2>Plastic ERP</h2>
                <span>Small Business Suite</span>
            </div>

            <nav className="sidebar__menu">

                {navigation.map((item) => {

                    if ("children" in item) {

                        return (

                            <div key={item.title}>

                                <h4>{item.title}</h4>

                                {item.children.map(child => (

                                    <NavLink
                                        key={child.title}
                                        to={child.path}
                                    >
                                        {child.title}
                                    </NavLink>

                                ))}

                            </div>

                        );

                    }

                    return (
                        
                        <div className="sidebar__children">
                            <NavLink
                                key={item.title}
                                to={item.path}
                            >
                                {item.title}
                            </NavLink>
                        </div>

                    );

                })}

            </nav>

        </aside>
    );
}