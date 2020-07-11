import React from "react";
import "./EditProfile.scss";
import {UserInterface} from "../../UserInterface";

interface EditProfileProps {
    user: UserInterface |  null
}

function EditProfile(props: EditProfileProps) {
    return (
        <form className="edit-profile-wrapper">
            <input name="Motto" type="text" value={props.user ? props.user.motto : "No user motto"}/>
            <textarea cols={50} rows={7}>{props.user ? props.user.bio : "No user bio"}</textarea>
            <input type="submit" value="Save Changes" className="save-button"/>
        </form>
    );
}

export default EditProfile;