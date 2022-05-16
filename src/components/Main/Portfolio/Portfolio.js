import React from "react";
import "./Portfolio.css";
import arrow from "../../../images/icon__arrow.svg";

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a
                        href="https://gonzoooo.github.io/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__links-item"
                    >
                        Статичный сайт
                        <img
                            src={arrow}
                            alt="стрелка ссылка на сайт"
                            className="portfolio__links-img"
                        />
                    </a>
                </li>
                <li className="portfolio__link">
                    <a
                        href="https://gonzoooo.github.io/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__links-item"
                    >
                        Адаптивный сайт
                        <img
                            src={arrow}
                            alt="стрелка ссылка на сайт"
                            className="portfolio__links-img"
                        />
                    </a>
                </li>
                <li className="portfolio__link">
                    <a
                        href="https://gonzoooo.nomoredomains.club"
                        target="_blank"
                        rel="noreferrer"
                        className="portfolio__links-item"
                    >
                        Одностраничное приложение
                        <img
                            src={arrow}
                            alt="стрелка ссылка на сайт"
                            className="portfolio__links-img"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;
