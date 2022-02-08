import React from "react";
import "./AboutMe.css";
import myPhoto from "../../../images/my_photo.png";

function AboutMe() {
    return (
        <div className="about">
            <h2 className="about__header">Студент</h2>
            <div className="about__info">
                <div>
                    <img src={myPhoto} alt="мое фото" className="about__photo" />
                </div>
                <div className="about__info_container">
                    <h3 className="about__info-name">Ольга</h3>
                    <h4 className="about__info-age_prof">Фронтенд-разработчик, 28 лет</h4>
                    <p className="about__info-text">
                        Закончила институт по направлению “Гос. и муниципальное управление”,
                        живу и работаю в Москве.
                    </p>
                    <p className="about__info-text">
                        В свободное время люблю читать и путешествовать.
                    </p>
                    <p className="about__info-text">
                        С января 2021г. увлеклась веб-разработкой, окончила курс обучения по
                        данному направлению.
                    </p>
                    <ul className="about__info-links">
                        <li>
                            <a
                                href="https://ru-ru.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="about__info-links_item"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/"
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
