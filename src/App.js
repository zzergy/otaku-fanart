import React from 'react';
import './App.css';
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Main from "./components/main/Main";
import FilterNavigationBar from "./components/filter-nav-bar/FilterNavigationBar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <body>
            <NavigationBar/>
            <FilterNavigationBar/>
            <Main/>
            <Footer/>
        </body>
    );
}

export default App;
