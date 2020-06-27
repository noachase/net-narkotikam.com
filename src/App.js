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
import Opium from "./components/Narcotics/Opium/OneNarcotic";
import NarcotisContainer from "./components/Narcotics/NarcoticasContainer";
import store from "./redux/state";


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
          <Route path="/dialogs" render={() => 'hello'} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/narcotics" render={() => <NarcotisContainer {...store}/>} />

          {/* <Route path="/narcotics/opium" render={() => <Opium state={state.opium} />} /> */}
          {/* <Route path="/narcotics/amfetamin" render={() => <Opium />} />
          <Route path="/narcotics/kofein" render={() => <Opium />}/> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
