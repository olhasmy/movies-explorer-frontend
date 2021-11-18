import React from 'react';
import './Form.css';
import Logo from "../Logo/Logo";
import {NavLink, Route} from 'react-router-dom';


function Form({name, onSubmit, title, children, submitBtnText, question, nav}) {

    return (
        <form
            className="form"
            name={name}
            onSubmit={onSubmit}
        >
            <div className="form__container">
                <Logo />
                    <h2 className="form__header">{title}</h2>
                {children}
                    <button className="form__submit-button" type="submit">{submitBtnText}</button>
            </div>
            <Route path="/signup">
                <NavLink
                    to="/signin"
                    className="form__nav"
                    activeClassName="form__nav_active"
                >
                    <p className="form__question">{question}</p>
                    {nav}
                </NavLink>
            </Route>
            <Route path="/signin">
                <NavLink
                    to="/signup"
                    className="form__nav"
                    activeClassName="form__nav_active"
                >
                    <p className="form__question">{question}</p>
                    {nav}
                </NavLink>
            </Route>
        </form>
    );
}

export default Form;
