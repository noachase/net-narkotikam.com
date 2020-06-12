import React from 'react';
import classes from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header = () => {
    return (
        <header className={classes.header}>

            <HeaderLogo/>
            {/* <img alt="logo" src="https://img.favpng.com/9/0/12/logo-phoenix-illustration-png-favpng-bPSWE9dLfqAMWJwvZeAErTs4U.jpg"></img> */}
            {/* <img alt="logo" src="../../assets/logo.png"></img> */}
        </header>
    )
}

export default Header;