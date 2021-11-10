import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
    return (
        <div className="portfolio">
            <ul className="portfolio__links">Портфолио
                <li><a href='https://ru-ru.facebook.com/' className='portfolio__links-item'>Статичный сайт<img src={arrow} alt='стрелка ссылка на сайт' className='portfolio__links-img'/></a></li>
                <li><a href='https://ru-ru.facebook.com/' className='portfolio__links-item'>Адаптивный сайт<img src={arrow} alt='стрелка ссылка на сайт' className='portfolio__links-img'/></a></li>
                <li><a href='https://ru-ru.facebook.com/' className='portfolio__links-item'>Одностраничное приложение<img src={arrow} alt='стрелка ссылка на сайт' className='portfolio__links-img'/></a></li>
            </ul>
        </div>
    );
}

export default Portfolio;
