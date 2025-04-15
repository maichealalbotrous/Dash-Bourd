import React from "react";
import "./Sidebar.css";
import { sidebarItems } from "../../data";
import HelpCenter from "../help center/HelpCenter";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo flex">
        
        <h2>Dashbord</h2>
      </div>

      <div className=" grid">
        {sidebarItems.map((e, index) => (
          <li className="item ">
            <a className="link flex">
            <span className="icon">{e.icon}</span>
            <span className="text">{e.title}</span>
            </a>
          </li>
        ))}
      </div>
        <HelpCenter/>
    </div>
  );
}

export default Sidebar;
