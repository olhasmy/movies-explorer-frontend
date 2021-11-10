import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__info">
                <p className="footer__info-copy">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__info-links">
                    <li><a href='https://practicum.yandex.ru/' className='footer__info-links_item'>Яндекс.Практикум</a></li>
                    <li><a href='https://github.com/' className='footer__info-links_item'>Github</a></li>
                    <li><a href='https://ru-ru.facebook.com/' className='footer__info-links_item'>Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
