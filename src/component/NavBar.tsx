import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";
import "./NavBar.css";
function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const show = () => {
        setSidebar(true);
    };
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    {SideBarData.map((d, i) => (
                        <li key={i} className={d.className}>
                            <Link to={d.path}>
                                {d.icon}
                                <span>{d.title}</span>
                            </Link>
                        </li>
                    ))}
                </div>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;
