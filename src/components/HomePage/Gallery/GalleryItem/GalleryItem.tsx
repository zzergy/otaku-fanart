import React from "react";
import "./GalleryItem.scss";

interface GalleryItemProps {
    id: number;
    imageUrl: string;
    imageTitle: string;
}

function GalleryItem(props: GalleryItemProps) {
        return (
            <section>
                <img src={props.imageUrl} alt="fanArt"/>
                <div className="image-info-container">
                    <div className="title-container">{props.imageTitle}</div>
                    <div className="likes-container">
                        <img className="like-icon" src={"./icons/heart-full.png"} alt='post image'/>
                        <p>20</p>
                    </div>
                </div>
            </section>
        );
}

export default GalleryItem