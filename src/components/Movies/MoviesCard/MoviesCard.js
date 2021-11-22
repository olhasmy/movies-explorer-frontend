import React from 'react';
import './MoviesCard.css';

function MoviesCard({name, duration, pic, saved }) {

    const [isLiked, setIsLiked] = React.useState(false)

    function likeMovie() {
        setIsLiked(!isLiked)
    }

    return (
        <li className="card">
            <div className="card__container">
                <div className="card__group">
                    <h2 className="card__group-name">{name}</h2>
                    <div className="card__group-duration">{duration}</div>
                    { saved ?
                        <button
                            aria-label="Delete"
                            type="button"
                            className="card__group-button card__group-cross"
                        /> :
                        <button
                            onClick={ likeMovie }
                            aria-label="Like"
                            type="button"
                            className={ isLiked ? 'card__group-button card__group-like_active' : 'card__group-button card__group-like_not_active'}
                        />
                    }
                </div>
                <img
                    src={pic}
                    className="card__img"
                    alt="Изображение фильма"
                />
            </div>
        </li>
    );
}

export default MoviesCard;
