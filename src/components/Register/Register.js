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
                <div className="input">
                    <span className="register__input-span">Имя</span>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="register__input register__input_for_email"
                        name="Name"
                        autoComplete="on"
                    />
                    <span className="register__input-span">E-mail</span>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="register__input register__input_for_email"
                        type="email"
                        name="Email"
                        autoComplete="on"
                    />
                    <span className="register__input-span">Пароль</span>
                    <input
                        required
                        className="register__input register__input_for_password"
                        type="password"
                        name="Password"
                        autoComplete="on"
                    />
                </div>
            </div>
        </Form>
    );
}

export default Register;
