import React from "react";
import Header from "../Header/Header";
import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function savedMovies({
                         movies,
                         userSavedMovies,
                         loading,
                         onDeleteMovie,
                         onShortMovies,
                         onSearchSavedMovies,
                         isInfoTooltipOpen,
                     }) {
    return (
        <>
            <Header />
            <SearchForm
                onSearchSavedMovies={onSearchSavedMovies}
                onShortMovies={onShortMovies}
                isInfoTooltipOpen={isInfoTooltipOpen}
            />
            <MoviesCardList
                userSavedMovies={userSavedMovies}
                loading={loading}
                onDeleteMovie={onDeleteMovie}
                movies={movies}
            />
            <Footer />
        </>
    );
}

export default savedMovies;
