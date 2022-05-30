import React from "react";
const logo = require("../assets/logo2.png");

const TopNav=()=>{
    return  <div className="top-menu">
    <div className="dasboard_logo">
      <img src={logo} alt="" />
      <span>BAPTIST MEDICAL CENTER</span>
    </div>
    {/* MENU-ICONS */}
    <div className="menu-icons-section">
    <span title="Admin panel">ADMIN</span>
        <i className="fa fa-bell notification-bell"></i>
        <i className="fa fa-envelope message-icons"></i>
        <i className="fa fa-cog settings"></i>
        <i className="fa fa-user user-icons"></i>
        
    </div>
  </div>
}


export default TopNav;