/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
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
                            <a onClick={Toggle} href="#" className={classes.active}>Усі наркотики</a>
                        </div>
                        {
                            on &&
                            <div>
                                <div className={`${classes.itemNarko} ${classes.active}`}>
                                    <NavLink to="/narcotics/opium" activeClassName={classes.active}>Опиум</NavLink>
                                </div>
                                <div className={`${classes.itemNarko} ${classes.active}`}>
                                    <NavLink to="/narcotics/durman" activeClassName={classes.active}>Дурман</NavLink>
                                </div>
                                <div className={`${classes.itemNarko} ${classes.active}`}>
                                    <NavLink onClick={this.props.isOpium} to="/narcotics" activeClassName={classes.active}>Дурман</NavLink>
                                </div>
                                <div className={`${classes.itemNarko} ${classes.active}`}>
                                    <NavLink to="/narcotics" activeClassName={classes.active}>Кофеин</NavLink>
                                </div>
                            </div>
                        }
                    </div>
                )}
                />
                <br />

                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>


            </nav>
        )

    }
}

export default Nav;