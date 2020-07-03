import React from "react";
import "./NewPost.scss";

function NewPost() {
    return (
        <div className="form-wrapper">
            <form>
                <h3>Create new Post</h3>
                <input required type="text" placeholder="Title*" className="text"/>
                <input type="text" placeholder="Tags" className="text"/>
                <input required type="url" placeholder="https://google.com*" pattern="https://.*" className="text"/>
                <input type="submit" value="Post" className="post-button"/>
            </form>
        </div>
    );
}

export default NewPost;