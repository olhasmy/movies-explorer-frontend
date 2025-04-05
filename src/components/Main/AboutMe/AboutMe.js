import React from "react";
import "./AboutMe.css";
import myPhoto from "../../../images/myPhoto.webp";

function AboutMe() {
    return (
        <div className="about">
            <h2 className="about__header">Обо мне</h2>
            <div className="about__info">
                <div>
                    <img src={myPhoto} alt="мое фото" className="about__photo" />
                </div>
                <div className="about__info_container">
                    <h4 className="about__info-age_prof">Привет, меня зовут Ольга</h4>
                    <p className="about__info-text">
                        Закончила курс на Веб-разработчика,
                        живу и работаю в Москве.
                    </p>
                    <p className="about__info-text">
                        В свободное время люблю читать и путешествовать.

                    </p>
                    <ul className="about__info-links">
                        <li>
                            <a
                                href="https://t.me/gatarto"
                                target="_blank"
                                rel="noreferrer"
                                className="about__info-links_item"
                            >
                                Telegram
                            </a>
                            <a
                                href="https://github.com/olhasmy"
                                target="_blank"
                                rel="noreferrer"
                                className="about__info-links_item"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
