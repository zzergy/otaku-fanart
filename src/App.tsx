import React from 'react';
import "./normalize.css";
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BrowseImagesPage from "./components/BrowseImagesPage/BrowseImagesPage";
import Profile from "./components/ProfilePage/Profile";
import Register from "./components/LoginAndRegisterPage/Register";
import Login from "./components/LoginAndRegisterPage/Login";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={BrowseImagesPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
