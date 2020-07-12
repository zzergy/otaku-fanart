import React, {useEffect, useState} from "react";
import "./ViewPost.scss";
import Footer from "../Footer/Footer";
import {Link, useParams} from "react-router-dom";
import {makeRequestToTheServer} from "../utils";
import userIcon from "../NavigationBar/navigation-bar-images/user-icon.png";

interface ViewPostParams {
    id: string
}

interface Comment {
    imageUrl: string;
    comment: string
}

interface UseStateInterface {
    imageUrl: string;
    likeCount: number;
    authorName: string;
    title: string;
    keywords: {keyword: string}[];
    comments: Comment[];
}

function ViewPost() {
    const [currentState, setState] = useState<UseStateInterface>({
        imageUrl: '',
        likeCount: 0,
        title: '',
        authorName: '',
        keywords: [],
        comments: []
    });

    const params = useParams<ViewPostParams>();

    useEffect(() => {
        makeRequestToTheServer('GET', `http://localhost:3001/api/post/${params.id}`).then(
            (response) => {
                if(!response.error) {
                    setState(response.post);
                }
            }
        );
    }, []);

    return (
        <div className="main-container">
            <Link to="/" className="back-button">Back</Link>
            {/*image and buttons*/}
            <div className="image-container">
                {/*image*/}
                <img className="full-image" src={currentState.imageUrl} alt="post image"/>

                <div className="likeAndComment-container">
                    <div className='post-likes-container'>
                        <button className="like-button button-size"/>
                        <p>{currentState.likeCount}</p>
                    </div>
                    <div>
                        <button className="comment-button button-size"/>
                        <p>{currentState.comments.length}</p>
                    </div>
                </div>
            </div>

            {/*image information*/}
            <div className="info-container">
                <h2>{currentState.title}</h2>
                <h3>Uploaded by: {currentState.authorName}</h3>

                {currentState.keywords.map(
                    item => {return(<span>{item.keyword}</span>)}
                )}

                <hr style={{color: "#6135BF"}}/>
            </div>

            {/*comment section*/}
            {currentState.comments.map(
                item => {
                    return (
                        <div className="comments-container">
                            <div className="new-comment">
                                {/*user image*/}
                                <img src={item.imageUrl || userIcon} alt="user icon"/>
                                {/*comment field*/}
                                <div className="comment">{item.comment}</div>
                            </div>
                        </div>
                    )
                })
            }


            <Footer/>
        </div>
    );
}

export default ViewPost;