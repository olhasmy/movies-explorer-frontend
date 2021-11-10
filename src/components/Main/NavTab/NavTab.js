import React from 'react';
import './NavTab.css';
import {NavLink, Route} from "react-router-dom";

function NavTab() {
    return (
        <nav>
            <Route path="/profile">
                <ul className="nav__buttons nav__buttons_for_films">
                    <NavLink to="/films">
                        <li><button className="nav__buttons-item nav__buttons_for_films-item">Фильмы</button></li>
                    </NavLink>
                    <NavLink to="/savedFilms">
                        <li><button className="nav__buttons-item nav__buttons_for_films-item">Сохраненные фильмы</button></li>
                    </NavLink>
                </ul>
            </Route>
            <Route path="/profile">
                <ul className="nav__buttons nav__button_for_account">
                    <NavLink to="/films">
                        <li><button className="nav__buttons-item nav__button_for_account-item">Аккаунт<div className="nav__account-icon"/></button></li>
                    </NavLink>
                </ul>
            </Route>
            <Route exact path="/">
                <ul className="nav__buttons nav__buttons_for_user">
                    <NavLink to="/signup">
                        <li><button className="nav__buttons-item nav__buttons_for_user-signup">Регистрация</button></li>
                    </NavLink>
                    <NavLink to="/signin">
                        <li><button className="nav__buttons-item nav__buttons_for_user-signin">Войти</button></li>
                    </NavLink>
                </ul>
            </Route>
        </nav>
    );
}

export default NavTab;
