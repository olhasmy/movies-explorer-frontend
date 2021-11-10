import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../../SavedMovies/MoviesCardList";

function MoviesCardList() {
    return (
        <ul className="cards">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </ul>
    );
}

export default MoviesCardList;
