import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import Toggle from '../../Common/Preloader/Toggle/Toggle';

class Nav extends React.Component {
    render() {
        return (
            <nav className={classes.nav}>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile" activeClassName={classes.active}>Главная</NavLink>
                </div>
                <Toggle render={({ on, Toggle }) => (
                    <div>
                        {/* <button onClickCapture>k</button> */}
                        <div className={classes.item}>
                            <a onClick={Toggle} href="#" activeClassName={classes.active}>Наркотики</a>
                        </div>
                        {
                            on &&
                            <div>
                                <div className={classes.item}>
                                    <NavLink to="/news" activeClassName={classes.active}>Конопля</NavLink>
                                </div>
                                <div className={classes.item}>
                                    <NavLink to="/music" activeClassName={classes.active}>Амфетамин</NavLink>
                                </div>
                                <div className={classes.item}>
                                    <NavLink to="/users" activeClassName={classes.active}>Кофеин</NavLink>
                                </div>
                            </div>
                        }

                    </div>
                )} />
                <br />

                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>


            </nav>
        )

    }
}

export default Nav;