import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../utils/useFormWithValidation";

function Profile({ onSignOut, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext);
    const inputRef = React.useRef();
    const [notActive, setNotActive] = React.useState(true);
    const pattern = "([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})";

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleChangeBtnState(e) {
        e.preventDefault();
        setNotActive(!notActive);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(values.name !== currentUser.name && values.email !== currentUser.email) {
            onUpdateUser(
                values.name || currentUser.name,
                values.email || currentUser.email
            );
        } else {
            return;
        }
        setNotActive(true);
    }

    return (
        <div>
            <Header />
            <div className="profile">
                <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__input profile__input_for_name">
                        <label htmlFor="name" className="profile__label">
                            Имя
                        </label>
                        <input
                            disabled={notActive}
                            required
                            minLength="2"
                            maxLength="30"
                            className="profile__input"
                            name="name"
                            type="text"
                            autoComplete="on"
                            ref={inputRef}
                            defaultValue={currentUser.name}
                            onChange={handleChange}
                            id="name"
                        />
                    </div>
                    <span className="profile__input-span">{errors.name}</span>
                    <div className="profile__input profile__input_for_email">
                        <label htmlFor="email" className="profile__label">
                            E-mail
                        </label>
                        <input
                            disabled={notActive}
                            required
                            minLength="2"
                            maxLength="30"
                            ref={inputRef}
                            className="profile__input"
                            type="email"
                            name="email"
                            autoComplete="on"
                            id="email"
                            onChange={handleChange}
                            defaultValue={currentUser.email}
                            pattern={pattern}
                        />
                    </div>
                    <span className="profile__input-span">{errors.email}</span>
                </form>
                {notActive ? (
                    <button
                        className="profile__button profile__button-edit"
                        onClick={handleChangeBtnState}
                    >
                        Редактировать
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="profile__button profile__button-edit"
                        onClick={handleSubmit}
                        disabled={!isValid}
                    >
                        Сохранить
                    </button>
                )}
                <button
                    type="button"
                    className="profile__button profile__button-exit"
                    onClick={onSignOut}
                >
                    Выйти из аккаунта
                </button>
            </div>
        </div>
    );
}

export default Profile;
