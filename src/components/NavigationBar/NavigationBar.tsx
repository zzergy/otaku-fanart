import React, {useState} from "react";
import "./NavigationBar.scss";
import userIcon from "./navigation-bar-images/user-icon.png";
import notificationBellIcon from "./navigation-bar-images/notification-bell-icon.png";
import {Link} from "react-router-dom";
import {UserInterface} from "../UserInterface";
import {makeRequestToTheServer} from "../utils";
import {useHistory} from "react-router-dom";

interface NavigationBarProps {
    user: UserInterface | null
    clearUser: ()=> void
}

function NavigationBar(props: NavigationBarProps) {
    
    function getUserImage() {
        if (props.user && props.user.imageUrl) {
            return props.user.imageUrl;
        }
        return userIcon;
    }

    const history = useHistory();

    function handleLogOut() {
        makeRequestToTheServer("POST", "http://localhost:3001/api/users/logout").then(
            () => {
                history.push("/");
                props.clearUser();
            }
        );
    }

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
                <Link to="/profile"><img className="user-icon" src={getUserImage()} alt="user icon"/></Link>
                <a><img className="notification-bell-icon" src={notificationBellIcon} alt="notification bell"/></a>

                {/*Login and Log out button*/}
                {props.user ? (
                    <button className="logout-button" onClick={handleLogOut}>LOG OUT</button>) : (
                    <Link to="/login" className="login-button">LOG IN</Link>)}
            </div>
        </div>
    );
}

export default NavigationBar;