import React from "react";
const SideMenuIcons=({props,title})=>{
    return <div className="side_nav_ctx">
            <i className={props}></i>
            <span>{title}</span>
            </div>

}

export default SideMenuIcons;