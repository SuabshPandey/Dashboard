import React from "react";
import { NotificationsNone, Settings, Language } from "@material-ui/icons";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">PaayaHo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
              <Language />
          </div>
          <div className="topbarIconContainer">
              <Settings />
          </div>
          <img src="https://globalnews.ca/wp-content/uploads/2019/09/saint-tropez-post-malone-2.jpg?quality=85&strip=all" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
