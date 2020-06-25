import React from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import BrowseImagesPage from "./components/BrowseImages-Page/BrowseImagesPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <body>
        <NavigationBar/>
        {/*<HomePage/>*/}
        <BrowseImagesPage/>
        <Footer/>
        </body>
    );
}

export default App;
