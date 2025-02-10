import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import logo from '../../assets/images/Netflix_Logo_PMS.png'
function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li><img src={logo}alt="" width="100"/></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by languge</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon/>
            </li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/> </li>
            <li><ArrowDropDownIcon/></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
