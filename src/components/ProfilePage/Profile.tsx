import React, {useState} from "react";
import "./Profile.scss";
import Footer from "../Footer/Footer";
import Gallery from "../HomePage/Gallery/Gallery";
import {Link, Route, Switch} from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import EditProfile from "./EditProfile/EditProfile";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {UserInterface} from "../UserInterface";
import userIcon from "../NavigationBar/navigation-bar-images/user-icon.png";


interface ProfileProps {
    user: UserInterface | null
    updateUser: (motto: string, bio: string) => void
}

function Profile(props: ProfileProps) {
    const [isEditingProfile, setState] = useState(false);

    function stopEditing () {
        setState(false);
    }

    function handleClick() {
        setState(true);
    }

    return (
        <div>
            <div className="banner-container"/>

            <div className="profile-page-container">

                <div className="profile-info-container">
                    {/*user picture*/}
                    <img src={props.user?.imageUrl ? props.user.imageUrl : userIcon} alt="user" width="200"
                         height="200"/>

                    {/*user information*/}
                    <div className="user-info-container">
                        <button className="edit-profile-button" onClick={handleClick}>Edit Profile</button>
                        {isEditingProfile ? (<EditProfile user={props.user} updateUser={props.updateUser} stopEditing={stopEditing}/>) : (
                            <ProfileInfo user={props.user}/>)}
                    </div>
                </div>

                <div className="profile-nav">
                    <Link to="/profile/posts" className="postLink">Your Posts</Link>
                    <Link to="/profile/newPost" className="postLink">New Post</Link>
                    <Link to="/profile/likedPosts" className="postLink">Liked Posts</Link>
                </div>

                <Switch>
                    <Route path="/profile/posts" component={Posts}/>
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

function Posts() {
    return (
        // @ts-ignore
        <div style={styles}>
            <h1>Your Posts</h1>
            <Gallery yourPosts={true}/>
        </div>
    );
}

function LikedPosts() {
    return (
        // @ts-ignore
        <div style={styles}>
            <h2>Liked Posts</h2>
            <Gallery likedPosts={true}/>
        </div>
    );
}

export default Profile;