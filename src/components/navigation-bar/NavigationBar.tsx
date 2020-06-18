import React from "react";
import "./NavigationBar.scss";
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
                    <span>Otaku-Fanart</span>
                    <a>Home</a>
                    <a>About</a>
                    <input id="search-bar" type="search" placeholder="Search.."/>
                    <button type="submit" id="search-button"/>
                </div>

                <div id="nav-right">
                    <a><img id="user-icon" src={userIcon} alt="user icon"/></a>
                    <a><img id="notification-bell-icon" src={notificationBellIcon} alt="notification bell"/></a>
                    <button id="sign-in-button">SIGN IN</button>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;