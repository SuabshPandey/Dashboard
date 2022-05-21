import React from "react";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Management</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <i className="fad fa-key sidebarIcon"></i>
              Roles & Permissions
            </li>
            <li className="sidebarListItem">
              <i className="fas fa-user-shield sidebarIcon"></i>
              Admin
            </li>
            <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              <i className="fad fa-user-friends sidebarIcon"></i>
              App User
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Service Type Management</h3>
          <ul className="sidebarList">
            <NavLink to="/category">
              <li className="sidebarListItem ">
                {/* <LineStyle className="sidebarIcon" /> */}
                <i className="fas fa-th-large sidebarIcon"></i>
                Categories
              </li>
            </NavLink>
            <NavLink to="/services">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Service Types
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Service Management</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              User Services
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Request Services
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Completed Services
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Service Histrory
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
