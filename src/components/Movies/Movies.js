import React from 'react';
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";

function Movies({ movies, savedMovies, loading, onAddMovie, onDislikeMovie, onSearchMovies, onShortMovies }) {

    return (
        <>
            <Header/>
            <SearchForm
                onSearchMovies={ onSearchMovies }
                onShortMovies={ onShortMovies }
            />
            { loading ?
                <Preloader/>
                :
                <MoviesCardList
                    movies={ movies }
                    onAddMovie={ onAddMovie }
                    onDislikeMovie={ onDislikeMovie }
                    savedMovies={ savedMovies }
                />
            }
            <Footer />
        </>
    );
}

export default Movies;
