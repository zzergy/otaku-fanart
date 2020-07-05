import React from "react";
import "./EditProfile.scss";

function EditProfile() {
    return (
        <form className="edit-profile-wrapper">
            <input name="username" type="text" placeholder="Zergy"/>
            <input name="Motto" type="text" placeholder="Evolution Complete"/>
            <textarea cols={50} rows={7}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum."
            />
            <input type="submit" value="Save Changes" className="save-button"/>
        </form>
    );
}

export default EditProfile;