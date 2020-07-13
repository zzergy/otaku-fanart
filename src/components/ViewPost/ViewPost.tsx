import React, {ChangeEvent, useEffect, useState} from "react";
import "./ViewPost.scss";
import Footer from "../Footer/Footer";
import {Link, useParams} from "react-router-dom";
import {makeRequestToTheServer} from "../utils";
import userIcon from "../NavigationBar/navigation-bar-images/user-icon.png";
import {UserInterface} from "../UserInterface";

interface ViewPostParams {
    id: string
}

interface UseStateInterface {
    imageUrl: string;
    likeCount: number;
    authorName: string;
    title: string;
    keywords: { _id: string, keyword: string }[];
    comments: {imageUrl: string, comment: string}[];
    newComment: string | '';
}

interface ViewPostProps {
    avatarUrl: string | undefined;
}

function ViewPost(props: ViewPostProps) {
    const [currentState, setState] = useState<UseStateInterface>({
        imageUrl: '',
        likeCount: 0,
        title: '',
        authorName: '',
        keywords: [],
        comments: [],
        newComment: ''
    });

    const params = useParams<ViewPostParams>();

    //getPost
    useEffect(() => {
        makeRequestToTheServer('GET', `http://localhost:3001/api/post/${params.id}`).then(
            (response) => {
                if (!response.error) {
                    setState(response.post);
                }
            }
        );
    }, []);

    //createComment
    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const newState = {
            ...currentState,
            [event.target.name]: event.target.value
        };
        setState(newState);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        makeRequestToTheServer('POST', `http://localhost:3001/api/post/${params.id}/comment`, {
            //the new comment info
            newComment: currentState.newComment
        }).then(
            (response) => {
                if(!response.error) {
                    const comments = currentState.comments;
                    const newComment = {imageUrl: props.avatarUrl || "", comment: currentState.newComment};
                    comments.push(newComment);
                    setState({...currentState, comments});
                }
            }
        );
    }

    return (
        <div className="main-container">
            {/*---------------------------- POST ----------------------------*/}
            <Link to="/" className="back-button">Back</Link>
            {/*image and buttons*/}
            <div className="image-container">
                {/*image*/}
                <img className="full-image" src={currentState.imageUrl} alt="post image"/>

                {/*Comment and Like Section*/}
                <div className="comment-and-like-container">
                    <div className='like-and-comment-layout'>
                        <button className="like-button button-size"/>
                        <p>{currentState.likeCount}</p>
                    </div>
                    <div className="like-and-comment-layout">
                        <button className="comment-button button-size"/>
                        <p>{currentState.comments.length}</p>
                    </div>
                </div>
            </div>

            {/*image info*/}
            <div className="info-container">
                <h2>{currentState.title}</h2>
                <h3>Uploaded by: {currentState.authorName}</h3>

                {currentState.keywords.map(
                    item => {
                        return (<span key={item._id} className="keywords-container">{item.keyword}</span>)
                    }
                )}
                <hr style={{color: "#6135BF"}}/>

            </div>

            {/*---------------------------- COMMENT SECTION ----------------------------*/}

            <div className="main-comments-container">
                {/*New comment form*/}
                <form className="new-comment-form" onSubmit={handleSubmit}>
                    <div className="new-comment">
                        <img className="avatar-icon" src={props.avatarUrl || userIcon} alt="user icon"/>
                        <div>
                            <textarea name="newComment" className="new-comment-text"
                                      placeholder="Enter your comment here.." onChange={handleChange}/>
                            <input type="submit" value="Post" className='post-comment-button'/>
                        </div>
                    </div>
                </form>

                {/*User comments*/}
                {currentState.comments.map(item => {
                    return (
                        <div className="comments-container">
                            <div className="comment-wrapper">
                                {/*user image*/}
                                <img src={item.imageUrl || userIcon} alt="user icon"/>
                                {/*comment field*/}
                                <div className="comment-text">{item.comment}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    );
}

export default ViewPost;