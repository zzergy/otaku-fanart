import React from "react";
import "./GalleryItem.scss";

interface GalleryItemProps {
    id: number;
    imageUrl: string;
    imageTitle: string;

    /*when liked it will change the state of the isliked to true and change the background
    image to a full heart*/
    onLike(): void;
}

interface GalleryItemState {
    isLiked: false;
}

class GalleryItem extends React.Component <GalleryItemProps, GalleryItemState> {
    render() {
        return (
            <section>
                <img src={this.props.imageUrl} alt="fanArt"/>
                <div className="image-info-container">
                    <p>{this.props.imageTitle}</p>
                    <button className="like-button"/>
                </div>
            </section>
        );
    }
}

export default GalleryItem