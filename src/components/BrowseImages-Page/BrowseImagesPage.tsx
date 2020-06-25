import React from "react";
import "./BrowseImagesPage.scss";
import testImage from "./sailor_moon.jpg";
import userIcon from "../NavigationBar/navigation-bar-images/user-icon.png";

function BrowseImagesPage() {
    return (
        <div className="main-container">
            <button className="back-button">Back</button>
            {/*image and buttons*/}
            <div className="image-container">
                {/*image*/}
                <img className="full-image" src={testImage} alt="sailor moon"/>

                <div className="likeAndComment-container">
                    <button className="like-button button-size"/>
                    <button className="comment-button button-size"/>
                    {/*maybe add a fullscreen option as a button ?*/}
                </div>
            </div>

            {/*image information*/}
            <div className="info-container">
                <h2>This is a very very very very very very very very very very very long title </h2>
                <h3>Uploaded by: Zergy</h3>

                {/*can be buttons or a tags*/}
                <p>Anime SailorMoon Manga Cute</p>
                <hr style={{color:"#6135BF"}}/>
            </div>

            {/*Comments section*/}
            <div className="comments-container">
                <h2>Comments 29</h2>
                <div className="new-comment">
                    {/*user image*/}
                    <img src={userIcon}/>
                    {/*comment field*/}
                    <textarea placeholder="Enter your comment here.."/>
                </div>
            </div>


        </div>
    );
}

export default BrowseImagesPage;