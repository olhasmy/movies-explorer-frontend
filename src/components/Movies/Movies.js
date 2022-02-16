import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";

function Movies({
                    movies,
                    loading,
                    onAddMovie,
                    onDislikeMovie,
                    onSearchMovies,
                    onShortMovies,
                    isShortMovies,
                    searchValue,
                    isInfoTooltipOpen,
                    userSavedMovies
                }) {
    return (
        <>
            <Header />
            <SearchForm
                onSearchMovies={onSearchMovies}
                onShortMovies={onShortMovies}
                searchValue={searchValue}
                isShortMovies={isShortMovies}
                isInfoTooltipOpen={isInfoTooltipOpen}
            />
            {loading ? (
                <Preloader />
            ) : (
                <MoviesCardList
                    movies={movies}
                    onAddMovie={onAddMovie}
                    onDislikeMovie={onDislikeMovie}
                    userSavedMovies={userSavedMovies}
                />
            )}
            <Footer />
        </>
    );
}

export default Movies;
