import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NotFound() {
    let history = useHistory();

    return (
        <div className="not__found">
            <h2 className="not__found-header">404</h2>
            <p className="not__found-text">Страница не найдена</p>
            <Link
                to="/savedFilms"
                className="not__found-link"
                onClick={history.goBack}
            >
                Назад
            </Link>
        </div>
    );
}

export default NotFound;
