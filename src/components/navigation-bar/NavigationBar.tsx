import React from "react";
import "./NavigationBar.scss";
import searchIcon from "./navigation-bar-images/search.svg";
import userIcon from "./navigation-bar-images/user-icon.png";
import notificationBellIcon from "./navigation-bar-images/notification-bell-icon.png";

export interface NavigationBarState {
    userIconUrl: string
    userName: string
}

class NavigationBar extends React.Component <{}, NavigationBarState>{
    render() {
        return (
            <nav className="navigation-bar-container">
                <div id="nav-left">
                    <a><span>Otaku-Fanart</span></a>
                    <a>Home</a>
                    <a>About</a>
                    <img id="search-icon" src={searchIcon} alt="search icon"/>
                    <input id="search-bar" type="search" placeholder="Search.."/>
                </div>
                <div id="nav-right">
                    <a><img id="user-icon" src={userIcon} alt="user icon"/></a>
                    <a><img id="notification-bell-icon" src={notificationBellIcon} alt="notification bell"/></a>
                    <button>SIGN IN</button>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;