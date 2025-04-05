import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";

function Logo() {
    return (
        <Link to="/" className="logo">
            <img src={logo} alt="логотип" />
        </Link>
    );
}

export default Logo;
