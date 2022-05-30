import React, { useState } from "react";
import SideMenuIcons from "./side_menu_icons";
const SideMenu = () => {
  const [initialState, setInitial] = useState(true);
  function toggleSideMenu() {
    setInitial(false);
  }
  function toggleSideMenuBack() {
    setInitial(true);
  }
  return (
    <div
      className={(initialState === true && "side-bar-container") || "is-active"}
      itemID="side_menu"
    >
     <div className="is-active-menu">
     <SideMenuIcons props={"fa fa-home"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-envelope"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-bell"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user-nurse"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
      <SideMenuIcons props={"fa fa-user"} title="ADMINISTRATOR" />
     </div>
     <div  className="toggle_side_bar">
       {initialState ==true &&  <i onClick={toggleSideMenu} className="fa fa-arrow-right"></i> ||  <i onClick={toggleSideMenuBack} className="fa fa-arrow-left"></i>}
     </div>
    </div>
  );
};

export default SideMenu;
