import React from 'react';
import './Login.css';
import Form from "../Form/Form";

function Login() {

    return (

        <Form
            name="login"
            title="Рады видеть!"
            submitBtnText="Войти"
            question="Ещё не зарегистрированы?"
            nav="Регистрация"
        >
            <div className="login">
                <div className="input">
                    <span className="login__input-span">E-mail</span>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="login__input login__input_for_email"
                        type="email"
                        name="Email"
                        autoComplete="on"
                    />
                    <span className="login__input-span">Пароль</span>
                    <input
                        required
                        className="login__input login__input_for_password"
                        type="password"
                        name="password"
                        autoComplete="on"
                    />
                </div>
            </div>
        </Form>
    );
}

export default Login;
