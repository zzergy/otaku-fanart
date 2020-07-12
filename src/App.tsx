import React, {useEffect, useState} from 'react';
import "./normalize.css";
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ViewPost from "./components/ViewPost/ViewPost";
import Profile from "./components/ProfilePage/Profile";
import Register from "./components/LoginAndRegisterPage/Register";
import {Login, LoginResponse} from "./components/LoginAndRegisterPage/Login";
import {UserInterface} from './components/UserInterface';
import {makeRequestToTheServer} from "./components/utils";

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

    useEffect(() => {
        makeRequestToTheServer('GET', 'http://localhost:3001/api/users/auth').then((response) => {
            setState({user: response.user});
        });
    }, []);

    function clearUser() {
        setState({user: null});
    }

    function updateUser(motto: string, bio: string) {
        const newState = {
            ...currentState
        };

        if(currentState.user !== null) {
            currentState.user.motto = motto;
            currentState.user.bio = bio;
        }

        setState(newState);
    }

    return (
        <BrowserRouter>
            <NavigationBar user={currentState.user} clearUser={clearUser}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about"/>
                <Route path="/post/:id" component={ViewPost}/>

                <Route path="/register" component={Register}/>
                <Route path="/login">
                    {currentState.user ? (<Redirect to="/"/>) : (<Login onLogin={onLogin}/>)}
                </Route>
                <Route path="/profile">
                    {currentState.user ? (<Profile user={currentState.user} updateUser={updateUser}/>) : (<Redirect to="/register"/>)}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
