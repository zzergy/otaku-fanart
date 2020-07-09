import React from "react";
import "./NavigationBar.scss";
import userIcon from "./navigation-bar-images/user-icon.png";
import notificationBellIcon from "./navigation-bar-images/notification-bell-icon.png";
import {Link} from "react-router-dom";
import {UserInterface} from "../UserInterface";

interface NavigationBarProps {
    user: UserInterface | null
}

export interface NavigationBarState {
    userIconUrl: string
    userName: string
}

class NavigationBar extends React.Component <NavigationBarProps, NavigationBarState> {
    getUserImage() {
        if (this.props.user) {
            return this.props.user.imageUrl;
        }
        return userIcon;
    }

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
                    <Link to="/profile"><img className="user-icon" src={this.getUserImage()} alt="user icon"/></Link>
                    <a><img className="notification-bell-icon" src={notificationBellIcon} alt="notification bell"/></a>

                    {this.props.user ? (<Link to="/logout" className="sign-in-button">LOG OUT</Link>) : (<Link to="/login" className="sign-in-button">LOG IN</Link>)}

                </div>
            </div>
        );
    }
}

export default NavigationBar;