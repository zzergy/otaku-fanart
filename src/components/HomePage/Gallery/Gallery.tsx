import React from "react";

// ---------- test images ----------
import image1 from "./test-images/ddww30i-1f710b5f-9f29-4434-8e86-94bbf3834b89.jpg";
import image2 from "./test-images/facing_the_dark_by_felix_fox_ddynhtk-fullview.png";
import image3 from "./test-images/listen_to_me_by_enriell_ddxmlna-fullview.jpg";
import image4 from "./test-images/__c___h_o_p_e_by_skfuu_ddwdtn9-pre.jpg";
import image5 from "./test-images/_c__rinnie_by_blanchiame_ddx4h4b-pre.png";
import image6 from "./test-images/bunny_by_antay6oo9_ddxadgp-pre.jpg";
import image7 from "./test-images/cm__alani_by_pastelpinkwitch_ddwl6kx-pre.jpg";

import "./Gallery.scss";
import GalleryItem from "./GalleryItem/GalleryItem";

class Gallery extends React.Component<any, any> {

    render() {
        return (
            <div className="gallery-container">
                <div className="column">
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image6}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image2}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image7}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image3}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image5}
                    />
                </div>
                <div className="column">
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image1}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image3}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image7}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image4}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image2}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image6}
                    />
                </div>
                <div className="column">
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image7}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image4}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image5}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image7}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image2}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image4}
                    />
                </div>
                <div className="column">
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image2}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image4}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image6}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image1}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image3}
                    />
                    <GalleryItem
                        id={1}
                        imageTitle={"Fancy image that i made and the title is too long"}
                        imageUrl={image5}
                    />
                </div>
            </div>
        );
    }
}

export default Gallery;