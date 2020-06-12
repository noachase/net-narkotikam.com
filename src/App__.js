import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import { Route, BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import styled from "styled-components";

const appWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    width: 100%;
    grid-template-areas:
        "h h"
        "n c";
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
`;

const appWrapperContent = styled.div`
    grid-area: c;
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px black solid;
`;

const App = (props) => {
    return (
        <BrowserRouter>
            <appWrapper>
                <Header />
                <Nav />
                <div className={classes.app_wrapper_content}>
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer />}
                    />
                    <Route path="/profile" render={() => <Profile />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </appWrapper>
        </BrowserRouter>
    );
};

export default App;
