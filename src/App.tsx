import React, {useState} from 'react';
import "./normalize.css";
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BrowseImagesPage from "./components/BrowseImagesPage/BrowseImagesPage";
import Profile from "./components/ProfilePage/Profile";
import Register from "./components/LoginAndRegisterPage/Register";
import {Login, LoginResponse} from "./components/LoginAndRegisterPage/Login";
import {UserInterface} from './components/UserInterface';

interface AppState {
    user: null | UserInterface
}

function App() {
    const [currentState, setState] = useState<AppState>({
        user: null,
    });

    const onLogin = (response: LoginResponse) => {
        setState({user: response.user});
    };

    return (
        <BrowserRouter>
            <NavigationBar user={currentState.user}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={BrowseImagesPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/login">
                    <Login onLogin={onLogin}/>
                </Route>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
