import React from 'react';
import './Navigation.css';
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavTab from "../Main/NavTab/NavTab";

function Navigation({ main }) {

    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    function handleMenuOpen() {
        setIsMenuOpened(true);
    }

    function handleMenuClose() {
        setIsMenuOpened(false);
    }

    return (
        <nav className="nav">
            <Logo />
            { main ?
                <ul className="nav__links nav__links_for_user">
                    <li><Link to="/signup" className="nav__links-item nav__links_for_user-signup">Регистрация</Link></li>
                    <li><Link to="/signin" className="nav__links-item nav__links_for_user-signin">Войти</Link></li>
                </ul>
                :
                <>
                    <>
                        <ul className="nav__links nav__links_for_films">
                            <li><NavLink to="/movies" className="nav__links-item nav__links_for_films-item">Фильмы</NavLink></li>
                            <li><NavLink to="/saved-movies" className="nav__links-item nav__links_for_films-item">Сохраненные фильмы</NavLink></li>
                        </ul>
                        <ul className="nav__links nav__link_for_account">
                            <li><Link to="/profile" className="nav__links-item nav__link_for_account-item">Аккаунт<div className="nav__account-icon"/></Link></li>
                        </ul>
                    </>
                    <button className="nav__button-burger" onClick={ handleMenuOpen }/>
                </>
            }
            <NavTab isOpen={ isMenuOpened } isClose={ handleMenuClose }/>
        </nav>
    );
}

export default Navigation;
