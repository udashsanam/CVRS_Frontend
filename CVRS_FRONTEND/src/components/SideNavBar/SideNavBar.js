import { Paper } from "@mui/material";
import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { menuItems } from "./MenuItems";
import "./SideNavbar.css";

function SideNavBar({ setPathName }) {
  const handleNavlinkClick = (event) => {
    setPathName(event.target.baseURI);
  };
  return (
    <div
      style={{ position: "sticky", backgroundColor: "white" }}
      className="sidebar--container"
    >
      <ul className="sidebar--menuitems">
        {menuItems.map((menuItem) => {
          return (
            <Paper elevation={2} className="my-1">
              <li className="sidebar--link">
                <NavLink
                  className="sidebar--navlink"
                  activeClassName="sidebar--navlink active"
                  to={menuItem.path}
                  onClick={handleNavlinkClick}
                >
                  <span style={{ fontSize: "18px" }}>{menuItem.title}</span>
                </NavLink>
              </li>
            </Paper>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNavBar;
