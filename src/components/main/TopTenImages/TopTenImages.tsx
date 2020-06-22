import React from "react";
import image1 from "../test-images/ddww30i-1f710b5f-9f29-4434-8e86-94bbf3834b89.jpg";
import image2 from "../test-images/facing_the_dark_by_felix_fox_ddynhtk-fullview.png";
import image3 from "../test-images/listen_to_me_by_enriell_ddxmlna-fullview.jpg";
import "./TopTenImages.scss";

function TopTenImages() {
return(
    <div className="top-ten-images">
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
    </div>
);
}

export default TopTenImages;