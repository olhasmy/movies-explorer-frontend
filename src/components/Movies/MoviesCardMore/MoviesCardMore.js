import React from "react";
import "./MoviesCardMore.css";

function MoviesCardMore({ onMoreClick, showButtonMore }) {
    return (
        showButtonMore && (
            <div className="more">
                <button className="more__button" onClick={onMoreClick}>
                    Ещё
                </button>
            </div>
        )
    );
}

export default MoviesCardMore;
