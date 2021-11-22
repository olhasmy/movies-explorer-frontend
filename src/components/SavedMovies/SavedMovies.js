import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function savedMovies({ saved }) {

    saved = true;

    return (
        <>
            <Header/>
            <SearchForm />
            <MoviesCardList saved={ saved }/>
            <Footer />
        </>
    );
}

export default savedMovies;
