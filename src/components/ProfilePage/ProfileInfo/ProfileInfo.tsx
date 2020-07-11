import React from "react";
import "./ProfileInfo.scss"
import {UserInterface} from "../../UserInterface";


interface ProfileInfoProps {
    user: UserInterface | null
}

function ProfileInfo(props: ProfileInfoProps) {
    return (
        <div>
            <h2>{props.user?.username}</h2>
            <h3>{props.user?.motto}</h3>
            <h3>Bio:</h3>
            <p>{props.user?.bio}</p>
        </div>
    );
}

export default ProfileInfo;