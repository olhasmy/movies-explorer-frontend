import React from 'react';
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCardMore from "./MoviesCardMore/MoviesCardMore";

function Movies({ saved }) {

    saved = false;

    return (
        <>
            <Header/>
            <SearchForm />
            <MoviesCardList saved={ saved }/>
            <MoviesCardMore />
            <Footer />
        </>
    );
}

export default Movies;
