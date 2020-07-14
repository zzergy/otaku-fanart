import React, {useEffect, useState} from "react";
import "./Gallery.scss";
import GalleryItem from "./GalleryItem/GalleryItem";
import {makeRequestToTheServer} from "../../utils";

interface GalleryProps {
    yourPosts?: boolean,
    likedPosts?: boolean
}

interface UseStateInterface {
    posts: { _id: string, imageUrl: string, title: string, likeCount: number }[]
}

function Gallery(props: GalleryProps) {
    const [currentState, setState] = useState<UseStateInterface>({
        posts: []
    });

    useEffect(() => {
        const url = `http://localhost:3001/api/post?yourPosts=${props.yourPosts}&likedPosts=${props.likedPosts}`;
        makeRequestToTheServer('GET', url).then(
            (response) => {
                if (!response.error) {
                    setState({posts: response.allPosts});
                }
            }
        )
    }, []);

    function getPosts(column: number) {
        const postsArray = currentState.posts;

        const output = [];

        if(!postsArray || postsArray.length === 0 || column - 1 >= postsArray.length) {
            return [];
        }

        for (let i = column - 1; ; i += 4) {
            output.push(postsArray[i]);

            if (i + 4 >= postsArray.length) {
                break;
            }
        }

        return output;
    }

    return (
        <div className="gallery-container">
            <div className="column">
                {getPosts(1).map(item => (<GalleryItem id={item._id} imageTitle={item.title} imageUrl={item.imageUrl} likeCount={item.likeCount}/>))}
            </div>
            <div className="column">
                {getPosts(2).map(item => (<GalleryItem id={item._id} imageTitle={item.title} imageUrl={item.imageUrl} likeCount={item.likeCount}/>))}
            </div>
            <div className="column">
                {getPosts(3).map(item => (<GalleryItem id={item._id} imageTitle={item.title} imageUrl={item.imageUrl} likeCount={item.likeCount}/>))}
            </div>
            <div className="column">
                {getPosts(4).map(item => (<GalleryItem id={item._id} imageTitle={item.title} imageUrl={item.imageUrl} likeCount={item.likeCount}/>))}
            </div>

        </div>
    );
}

export default Gallery;