import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import FilterNavigationBar from "./FilterNavigationBar/FilterNavigationBar";
import Main from "./main/Main";
import Footer from "../Footer/Footer";

function HomePage() {
    return (
        <div>
            <FilterNavigationBar/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default HomePage