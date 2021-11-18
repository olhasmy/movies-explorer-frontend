import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__info">
                <p className="footer__info-copy">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__info-links">
                    <li className='footer__info-link_item'><a href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer" className='footer__info-link_item'>Яндекс.Практикум</a></li>
                    <li className='footer__info-link_item'><a href='https://github.com/' target="_blank" rel="noreferrer" className='footer__info-link_item'>Github</a></li>
                    <li className='footer__info-link_item'><a href='https://ru-ru.facebook.com/' target="_blank" rel="noreferrer" className='footer__info-link_item'>Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
