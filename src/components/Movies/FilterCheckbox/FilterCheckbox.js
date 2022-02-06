import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onShortMovies }) {
    return (
        <div className="checkbox">
            <label className="checkbox__switch">
                <input type="checkbox" onChange={ onShortMovies }/>
                <span className="checkbox__slider checkbox__round"/>
            </label>
            <p className="checkbox__label">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
