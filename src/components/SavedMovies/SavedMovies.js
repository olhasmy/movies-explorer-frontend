import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function savedMovies({
                         movies,
                         savedMovies,
                         loading,
                         onDeleteMovie,
                         onShortMovies,
                         onSearchSavedMovies,
                     }) {
    return (
        <>
            <Header />
            <SearchForm
                onSearchSavedMovies={onSearchSavedMovies}
                onShortMovies={onShortMovies}
            />
            <MoviesCardList
                savedMovies={savedMovies}
                loading={loading}
                onDeleteMovie={onDeleteMovie}
                movies={movies}
            />
            <Footer />
        </>
    );
}

export default savedMovies;
