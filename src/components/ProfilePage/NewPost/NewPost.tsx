import React, {ChangeEvent, useState} from "react";
import "./NewPost.scss";
import axios from "axios";


function NewPost() {
    const [currentState, setState] = useState(
        {
            title: '',
            keywords: '',
            imageUrl: '',
        }
    );

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const newState = {
            ...currentState,
            [event.target.name]: event.target.value
        };

        //make the first letter Capital
        const fistCapitalLetter = newState.title.charAt(0).toUpperCase();
        const stringWithoutFirstLetter = newState.title.slice(1);
        newState.title = fistCapitalLetter + stringWithoutFirstLetter;

        setState(newState);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //convert keywords from string to array and remove unnecessary whitespace
        const keywordsToArray = currentState.keywords.split(/,\w*/g).filter(item => item);

        const response = await axios.post("http://localhost:3001/api/post", {
            title: currentState.title,
            keywords: keywordsToArray,
            imageUrl: currentState.imageUrl
        });
        console.log(response)
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h3>Create new Post</h3>
                <input name="title" required type="text" placeholder="Title*" className="text" onChange={handleChange}
                       value={currentState.title}/>
                <input name="keywords" type="text" placeholder="Tags" className="text" onChange={handleChange}/>
                <input name="imageUrl" required type="url" placeholder="https://google.com*" pattern="https://.*"
                       className="text"
                       onChange={handleChange}/>
                <input type="submit" value="Post" className="post-button"/>
            </form>
        </div>
    );
}

export default NewPost;