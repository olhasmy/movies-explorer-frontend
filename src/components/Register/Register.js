import React from "react";
import "./Register.css";
import Form from "../Form/Form";
import useFormWithValidation from "../../utils/useFormWithValidation";

function Register({ onReg, loading }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onReg(values.name, values.email, values.password);
    }

    return (
        <Form
            name="register"
            title="Добро пожаловать!"
            submitBtnText={
                loading ? "Выполняется регистрация..." : "Зарегистрироваться"
            }
            question="Уже зарегистрированы?"
            nav="Войти"
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <div className="register">
                <div className="inputs">
                    <label className="register__input-label" htmlFor="name">
                        Имя
                    </label>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="register__input register__input_for_email"
                        name="name"
                        type="text"
                        autoComplete="on"
                        value={values.name || ""}
                        onChange={handleChange}
                        id="name"
                    />
                    <span className="register__input-span">{errors.name}</span>
                    <label className="register__input-label" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        required
                        minLength="2"
                        maxLength="30"
                        className="register__input register__input_for_email"
                        type="email"
                        name="email"
                        autoComplete="on"
                        value={values.email || ""}
                        onChange={handleChange}
                        id="email"
                    />
                    <span className="register__input-span">{errors.email}</span>
                    <label className="register__input-label" htmlFor="password">
                        Пароль
                    </label>
                    <input
                        required
                        className="register__input register__input_for_password"
                        type="password"
                        name="password"
                        autoComplete="on"
                        value={values.password || ""}
                        onChange={handleChange}
                        minLength="8"
                        id="password"
                    />
                    <span className="register__input-span">{errors.password}</span>
                </div>
            </div>
        </Form>
    );
}

export default Register;
