// import "./Sidebar.css";
// import { navigation } from "../../config/navigation";
// import { NavLink } from "react-router-dom";
// import SidebarItem from "./SidebarItem";

// export default function Sidebar() {
//     return (
//         <aside className="sidebar">

//             <div className="sidebar__logo">
//                 <h2>Plastic ERP</h2>
//                 <span>Small Business Suite</span>
//             </div>

//             <nav className="sidebar__menu">
//                 <SidebarItem title={""} path={""} />

//                 {navigation.map((item) => {

//                     if ("children" in item) {

//                         return (

//                             <div key={item.title}>

//                                 <h4>{item.title}</h4>
// {/* 
//                                 {item.children.map(child => (

//                                     <NavLink
//                                         key={child.title}
//                                         to={child.path}
//                                     >
//                                         {child.title}
//                                     </NavLink>

//                                 ))} */}

//                             </div>

//                         );

//                     }

//                     return (
                        
//                         <div className="sidebar__children">
//                             <NavLink
//                                 key={item.title}
//                                 to={item.path}
//                             >
//                                 {item.title}
//                             </NavLink>
//                         </div>

//                     );

//                 })}

//             </nav>

//         </aside>
//     );
// }


import "./Sidebar.css";
import { Factory } from "lucide-react";
import { navigation } from "../../config/navigation";
import SidebarItem from "./SidebarItem";
// import {
//     PanelLeftClose,
//     PanelLeftOpen,
// } from "lucide-react";

import { useSidebar } from "../../context/SidebarContext";

export default function Sidebar() {

    const {
        collapsed,
        toggleSidebar,
        } = useSidebar();

    return (
        

        <aside
            className={
                collapsed
                ? "sidebar collapsed"
                : "sidebar"
            }
        >
            
            <div 
                className="sidebar__logo" 
                onClick={toggleSidebar}
            >                 
                
                <div className="sidebar__logo-icon">
                    <Factory size={32} />
                    
                </div>

                {!collapsed && (
                    <div className="sidebar__logo-text">
                        <h2>PX Industries ERP</h2>
                        <span>Small Business Suite</span>
                    </div>
                )}   

                {/* <button
                className="sidebar-toggle"
                onClick={toggleSidebar}
                >
                    {
                        collapsed
                        ?
                        <PanelLeftOpen size={10}/>
                        :
                        <PanelLeftClose size={20}/>
                    }
                </button>             */}

            </div>
                    
            <nav className="sidebar__menu">
                {
                    navigation.map(item => (
                        <SidebarItem
                            key={item.title}
                            title={item.title}
                            path={item.path}
                            icon={item.icon}
                            collapsed={collapsed}
                        />
                    ))
                }
            </nav>

            <div className="sidebar__footer">

            {!collapsed && (
                <>
                    <strong>Pearson Grant</strong>
                    <span>Administrator</span>
                </>
            )}

        </div>

        </aside>

    );

}