import React from "react";
import TopTenImages from "./TopTenImages/TopTenImages";
import Gallery from "./Gallery/Gallery"
import "./Main.scss"

class Main extends React.Component<any, any> {
    render() {
        return (
            <main>
                <TopTenImages/>
                <hr/>
                <Gallery/>
            </main>
        );
    }
}

export default Main;