import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({
                        movie,
                        onAddMovie,
                        onDeleteMovie,
                        onDislikeMovie,
                        userSavedMovies,
                    }) {
    const location = useLocation().pathname;

    const isLiked = userSavedMovies.find((item) => item.movieId === movie.id);

    const cardLikeButtonClassName = `card__group-button ${
        isLiked ? "card__group-like_active" : "card__group-like"
    }`;

    function handleSaveMovie() {
        onAddMovie(movie);
    }

    function handleDeleteMovie() {
        onDeleteMovie(movie);
    }

    function handleDislikeMovie() {
        onDislikeMovie(movie);
    }

    function handleOpenMovie() {
        location === "/movies"
            ? window.open(movie.trailerLink, "_blank")
            : window.open(movie.trailer, "_blank")
    }

    return (
        <li className="card">
            <div className="card__container">
                <div className="card__group">
                    <h2 className="card__group-name">{movie.nameRU}</h2>
                    <div className="card__group-duration">{movie.duration}</div>
                    {location === "/movies" ? (
                        <button
                            aria-label="Like"
                            type="button"
                            className={cardLikeButtonClassName}
                            onClick={isLiked ? handleDislikeMovie : handleSaveMovie}
                        />
                    ) : (
                        <button
                            aria-label="Delete"
                            type="button"
                            className="card__group-button card__group-cross"
                            onClick={handleDeleteMovie}
                        />
                    )}
                </div>
                <img
                    className="card__img"
                    src={
                        location === "/saved-movies"
                            ? movie.image
                            : `https://api.nomoreparties.co${movie.image.url}`
                    }
                    alt={movie.nameRU}
                    onClick={handleOpenMovie}
                />
            </div>
        </li>
    );
}

export default MoviesCard;
