import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    return (
        <form className="search">
            <div className="search__form">
                <input className="search__form-input" placeholder="Фильм" required />
                <div className="search__form-container">
                    <button className="search__form-button_find" type="submit">Найти</button>
                    <FilterCheckbox />
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
