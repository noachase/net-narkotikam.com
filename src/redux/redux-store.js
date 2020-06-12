import { createStore, combineReducers } from "redux";
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import pageReducer from "./page-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    pageReducer: pageReducer
});

let store = createStore(reducers);

window.store = store;
export default store;