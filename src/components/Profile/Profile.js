import React from 'react';
import './Profile.css';
import Header from "../Header/Header";
import {Link} from "react-router-dom";

function Profile({ name, email }) {

    return (
        <div>
            <Header />
            <div className="profile">
                <h2 className="profile__greeting">Привет, { name }!</h2>
                <form className="profile__form">
                    <div className="profile__input profile__input_for_name">
                        <label htmlFor="name" className="profile__label">Имя</label>
                        <input
                            required
                            minLength="2"
                            maxLength="30"
                            className="profile__input"
                            name="Name"
                            autoComplete="on"
                            id="name"
                            placeholder={ name }
                        />
                    </div>
                    <div className="profile__input profile__input_for_email">
                        <label htmlFor="e-mail" className="profile__label">E-mail</label>
                        <input
                            required
                            minLength="2"
                            maxLength="30"
                            className="profile__input"
                            type="email"
                            name="Email"
                            autoComplete="on"
                            id="e-mail"
                            placeholder={ email }
                        />
                    </div>
                </form>
                <button type="submit" className="profile__button profile__button-edit">Редактировать</button>
                <Link type="button" to="/" className="profile__button profile__button-exit">Выйти из аккаунта</Link>
            </div>
        </div>
    );
}

export default Profile;
