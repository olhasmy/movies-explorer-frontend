import React from 'react';
import './Login.css';
import Form from "../Form/Form";
import Preloader from "../Movies/Preloader/Preloader";
import useFormWithValidation from "../../utils/useFormWithValidation";

function Login({ onAuth, loading }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onAuth(values.email, values.password);
    }

    return (
        <Form
            name="login"
            title="Рады видеть!"
            submitBtnText={ loading ? "Выполняется вход..." : "Войти" }
            question="Ещё не зарегистрированы?"
            nav="Регистрация"
            onSubmit={ handleSubmit }
            isValid={ isValid }
        >
            { loading ? <Preloader/> : <></>}
            <div className="login">
                <div className="inputs">
                    <label className="login__input-label" htmlFor="email">E-mail</label>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="login__input login__input_for_email"
                        type="email"
                        name="email"
                        autoComplete="on"
                        value={ values.email || ""}
                        onChange={ handleChange }
                        id="email"
                    />
                    <span className="login__input-span">{ errors.email }</span>
                    <label className="login__input-label" htmlFor="password">Пароль</label>
                    <input
                        required
                        className="login__input login__input_for_password"
                        type="password"
                        name="password"
                        autoComplete="on"
                        value={ values.password || "" }
                        onChange={ handleChange }
                        minLength="8"
                        id="password"
                    />
                    <span className="login__input-span">{ errors.password }</span>
                </div>
            </div>
        </Form>
    );
}

export default Login;
