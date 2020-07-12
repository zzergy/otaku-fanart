import React from "react";
import FilterNavigationBar from "./FilterNavigationBar/FilterNavigationBar";
import Footer from "../Footer/Footer";
import Gallery from "./Gallery/Gallery";

function HomePage() {
    return (
        <div>
            <FilterNavigationBar/>
            <Gallery/>
            <Footer/>
        </div>
    );
}

export default HomePage