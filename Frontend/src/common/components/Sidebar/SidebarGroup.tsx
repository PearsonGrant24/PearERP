import { useState } from "react";

import {

    ChevronDown,
    LayoutDashboard,
    ChevronRight,
    LucideIcon,

} from "lucide-react";

import SidebarItem from "./SidebarItem";

import "./SidebarGroup.css";

type Child={

    title:string;

    path:string;

};

type Props={

    title:string;
    // path: string;
    icon: LucideIcon;

    children:Child[];

};

export default function SidebarGroup({

    title,

    icon:Icon,

    children,

}:Props){

    const [open,setOpen]=useState(false);

    return(

        <div className="sidebar-group">

            <button

                className="sidebar-group-header"

                onClick={()=>setOpen(!open)}

            >

                <div className="left">

                    <Icon size={20}/>

                    <span>{title}</span>
                    

                </div>

                {

                    open

                    ?

                    <ChevronDown size={18}/>

                    :

                    <ChevronRight size={18}/>
                    

                }

            </button>

            {

                open &&

                <div className="sidebar-children">

                    {

                        children.map(child=>(

                            <SidebarItem

                                key={child.title}

                                title={child.title}

                                path={child.path}

                                // icon={ChevronRight}   // temporary
                                
                                
                            />

                        ))

                    }

                </div>

            }

        </div>

    );

}