import React, {useState} from "react";
import "./Profile.scss";
import Footer from "../Footer/Footer";
import Gallery from "../HomePage/main/Gallery/Gallery";
import {Link, Route, Switch} from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import userPicture from "./user-picture.png";
import EditProfile from "./EditProfile/EditProfile";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {LoginResponse} from "../LoginAndRegisterPage/Login";
import {UserInterface} from "../UserInterface";
import userIcon from "../NavigationBar/navigation-bar-images/user-icon.png";

interface ProfileProps {
    user: UserInterface | null
}

function Profile(props: ProfileProps) {
    const [isClicked, setState] = useState(false);

    function handleClick() {
        setState(true);
    }


    return (
        <div>
            <div className="banner-container"/>

            <div className="profile-page-container">

                <div className="profile-info-container">
                    {/*user picture*/}
                    <img src={props.user ? props.user.imageUrl : userIcon} alt="user" width="200" height="200"/>

                    {/*user information*/}
                    <div className="user-info-container">
                        <button className="edit-profile-button" onClick={handleClick}>Edit Profile</button>
                            {isClicked ? (<EditProfile user={props.user}/>) : (<ProfileInfo user={props.user}/>)}
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