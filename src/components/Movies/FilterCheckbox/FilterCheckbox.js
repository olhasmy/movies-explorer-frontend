import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter__checkbox">
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"/>
            </label>
            <p className="filter__checkbox_label">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
