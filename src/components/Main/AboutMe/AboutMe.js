import React from 'react';
import './AboutMe.css';
import my_photo from '../../../images/my_photo.png';

function AboutMe() {
    return (
        <div className="aboutMe">
            <h2 className="aboutMe__header">Студент</h2>
            <div className="aboutMe__info">
                <div>
                    <h3 className="aboutMe__info-name">Ольга</h3>
                    <h4 className="aboutMe__info-age-prof">Фронтенд-разработчик, 28 лет</h4>
                    <p className="aboutMe__info-text">Закончила институт по направлению “Гос. и муниципальное управление”, живу и работаю в Москве.</p>
                    <p className="aboutMe__info-text">В свободное время люблю читать и путешествовать.</p>
                    <p className="aboutMe__info-text">С января 2021г. увлеклась веб-разработкой, окончила курс обучения по данному направлению.</p>
                    <ul className="aboutMe__info-links">
                        <li><a href='https://ru-ru.facebook.com/' className='aboutMe__info-links_item'>Facebook</a></li>
                        <li><a href='https://github.com/' className='aboutMe__info-links_item'>Github</a></li>
                    </ul>
                </div>
                <div>
                    <img src={my_photo} alt='мое фото' className="aboutMe__photo"/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
