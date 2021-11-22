import React from 'react';
import './Register.css';
import Form from "../Form/Form";

function Register() {

    return (
        <Form
            name="register"
            title="Добро пожаловать!"
            submitBtnText="Зарегистрироваться"
            question="Уже зарегистрированы?"
            nav="Войти"
        >
            <div className="register">
                <div className="inputs">
                    <label className="register__input-label">Имя</label>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="register__input register__input_for_email"
                        name="Name"
                        autoComplete="on"
                    />
                    <label className="register__input-label">E-mail</label>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="register__input register__input_for_email"
                        type="email"
                        name="Email"
                        autoComplete="on"
                    />
                    <label className="register__input-label">Пароль</label>
                    <input
                        required
                        id="register__input_for_password"
                        className="register__input register__input_for_password"
                        type="password"
                        name="Password"
                        autoComplete="on"
                    />
                    <span id="register__input_for_password--error" className="register__input_for_password--error">Что-то пошло не так...</span>
                </div>
            </div>
        </Form>
    );
}

export default Register;
