import React from "react";
import "./NavigationBar.scss";
import userIcon from "./navigation-bar-images/user-icon.png";
import notificationBellIcon from "./navigation-bar-images/notification-bell-icon.png";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";

export interface NavigationBarState {
    userIconUrl: string
    userName: string
}

class NavigationBar extends React.Component <{}, NavigationBarState> {
    render() {
        return (
            <div className="nav">
                <div className="nav-left">
                        <Link to="/"><span>Otaku-FanArt</span></Link>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <input className="search-bar" type="search" placeholder="Search.."/>
                        <button type="submit" className="search-button"/>
                </div>

                <div className="nav-right">
                    <Link to="/profile"><img className="user-icon" src={userIcon} alt="user icon"/></Link>
                    <a><img className="notification-bell-icon" src={notificationBellIcon} alt="notification bell"/></a>
                    <Link to="/register" className="sign-in-button">SIGN UP</Link>
                </div>
            </div>
        );
    }
}

export default NavigationBar;