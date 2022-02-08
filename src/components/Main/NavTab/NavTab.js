import React from "react";
import "./NavTab.css";
import { Link, NavLink } from "react-router-dom";

function NavTab({ isOpen, isClose }) {
    return (
        <div className={isOpen ? "navtab__visible overlay" : "navtab"}>
            <nav className="navtab__container">
                <button className="navtab__button" onClick={isClose} />
                <ul className="navtab__links">
                    <li>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="navtab__link_active"
                            className="navtab__link"
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/movies"
                            activeClassName="navtab__link_active"
                            className="navtab__link"
                        >
                            Фильмы
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/saved-movies"
                            activeClassName="navtab__link_active"
                            className="navtab__link"
                        >
                            Сохраненные фильмы
                        </NavLink>
                    </li>
                </ul>
                <ul className="navtab__links navtab__link_for_account">
                    <li>
                        <Link
                            to="/profile"
                            className="nav__links-item nav__link_for_account-item"
                        >
                            Аккаунт
                            <div className="nav__account-icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavTab;
