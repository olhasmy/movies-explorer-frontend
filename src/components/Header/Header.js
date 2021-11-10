import React from 'react';
import './Header.css';
import NavTab from "../Main/NavTab/NavTab";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <header className="header">
            <Logo />
            <NavTab />
        </header>
    );
}

export default Header;
