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
            <div className="nav">
                <div className="nav-left">
                    <span>Otaku-Fanart</span>
                    <a>Home</a>
                    <a>About</a>
                    <input className="search-bar" type="search" placeholder="Search.."/>
                    <button type="submit" className="search-button"/>
                </div>

                <div className="nav-right">
                    <a><img className="user-icon" src={userIcon} alt="user icon"/></a>
                    <a><img className="notification-bell-icon" src={notificationBellIcon} alt="notification bell"/></a>
                    <button className="sign-in-button">SIGN IN</button>
                </div>
            </div>
        );
    }
}

export default NavigationBar;