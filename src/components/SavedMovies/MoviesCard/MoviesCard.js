import React from 'react';
import './MoviesCard.css';
import Film from '../../../images/33film.jpg';

function MoviesCard() {

    return (
        <li className="card">
            <div className="card__container">
                <div className="card__group">
                    <h2 className="card__text">33 слова о дизайне</h2>
                    <div className="card__duration">1ч 42м</div>
                    <button
                        aria-label="Like"
                        type="button"
                        className="card__like_active"
                    />
                </div>
                <img
                    src={Film}
                    className="card__img"
                    alt="Изображение фильма"
                />
            </div>
        </li>
    );
}

export default MoviesCard;
