import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <label className="checkbox__switch">
                <input type="checkbox"/>
                <span className="checkbox__slider checkbox__round"/>
            </label>
            <p className="checkbox__label">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
