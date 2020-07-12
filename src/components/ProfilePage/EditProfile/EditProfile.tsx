import React, {ChangeEvent, useState} from "react";
import "./EditProfile.scss";
import {UserInterface} from "../../UserInterface";
import {makeRequestToTheServer} from "../../utils";

interface EditProfileProps {
    user: UserInterface | null,
    updateUser: (motto: string, bio: string) => void,
    stopEditing: () => void,
}

function EditProfile(props: EditProfileProps) {

    const [currentState, setState] = useState({
        motto: props.user?.motto || '',
        bio: props.user?.bio || ''
    });

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const newState = {
            ...currentState,
            [event.target.name]: event.target.value
        };

        setState(newState);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        makeRequestToTheServer('POST', 'http://localhost:3001/api/users/edit', {
            motto: currentState.motto,
            bio: currentState.bio

        }).then(() => {
            //what i want to display after saving the profile information
            props.updateUser(currentState.motto, currentState.bio);
            props.stopEditing();
        });
    }

    return (
        <form className="edit-profile-wrapper" onSubmit={handleSubmit}>
            <input name="motto" type="text" value={currentState.motto} onChange={handleChange}/>
            <textarea name="bio" cols={50} rows={7} onChange={handleChange}>{currentState.bio}</textarea>
            <div className="buttons-container">
                <input type="submit" value="Save" className="edit-profile-buttons"/>
                <input type="button" value="Cancel" className="edit-profile-buttons" onClick={props.stopEditing}/>
            </div>

        </form>
    );
}

export default EditProfile;