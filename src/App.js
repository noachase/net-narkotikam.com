import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import styled from "styled-components";
import Toggle from "./Common/Preloader/Toggle/Toggle";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.app_wrapper}>
        <Header />
        <Nav />
        <Toggle render={({on, Toggle})=> (
          <div>
            <button onClick={Toggle}>k</button>
            {
              on && <Nav/>
            }
            
          </div>
        )}/>

        <div className={classes.app_wrapper_content}>
          {/* <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} /> */}
          <Route path="/dialogs" render={() => 'hello'} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
