import React, {useState} from "react";
import "./Profile.scss";
import Footer from "../Footer/Footer";
import Gallery from "../HomePage/main/Gallery/Gallery";
import {Link, Route, Switch} from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import userPicture from "./user-picture.png";

function Profile() {
    const [isClicked, asd] = useState(false);

    function handleClick() {
        asd(true);
    }


    return (
        <div>
            <div className="banner-container"/>

            <div className="profile-page-container">

                <div className="profile-info-container">
                    {/*user picture*/}
                    <img src={userPicture} alt="user picture" width="200" height="200"/>

                    {/*user information*/}
                    <div className="user-info-container">
                        <button className="edit-profile-button" onClick={handleClick}>Edit Profile</button>
                        <h2>Zergy</h2>
                        <h3>Evolution Complete</h3>
                        <h3>Bio:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </p>
                        {/*<div>*/}
                        {/*    {isClicked ? (<h2>Clicked</h2>): (<h2>kill me im tired ass fuck</h2>)}*/}
                        {/*</div>*/}
                    </div>
                </div>
                
                <div className="profile-nav">
                    <Link to="/profile/yourPosts" className="postLink">Your Posts</Link>
                    <Link to="/profile/newPost" className="postLink">New Post</Link>
                    <Link to="/profile/likedPosts" className="postLink">Liked Posts</Link>
                </div>

                <Switch>
                    <Route path="/profile/yourPosts" component={YourPosts}/>
                    <Route path="/profile/likedPosts" component={LikedPosts}/>
                    <Route path="/profile/newPost" component={NewPost}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
};

function YourPosts() {
    return (
        // @ts-ignore
        <div style={styles}>
            <h1>Your Posts</h1>
            <Gallery/>
        </div>
    );
}

function LikedPosts() {
    return (
        // @ts-ignore
        <div style={styles}>
            <h2>Liked Posts</h2>
            <Gallery/>
        </div>
    );
}

export default Profile;