import React from 'react';
import './Profile.css';
import Header from "../Header/Header";

function Profile() {

    return (
        <div>
            <Header />
            <div className="profile">
                <div className="profile__container">
                    <h2 className="profile__header">Привет, Ольга!</h2>
                    <p className="profile__info-text">name</p>
                    <p className="profile__info-text">e-mail</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
