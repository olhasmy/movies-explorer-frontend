import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, main }) {
    return (
        <header className={main ? "header" : "header header__logged"}>
            <Navigation loggedIn={loggedIn} main={main}/>
        </header>
    );
}

export default Header;
