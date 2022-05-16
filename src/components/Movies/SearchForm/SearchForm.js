import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({
                        onSearchMovies,
                        onShortMovies,
                        onSearchSavedMovies,
                        isShortMovies,
                        searchValue,
                        isInfoTooltipOpen,
                    }) {
    const [search, setSearch] = React.useState("");
    const [searchSaved, setSearchSaved] = React.useState("");
    const [isSearchValid, setIsSearchValid] = React.useState(true);
    const location = useLocation().pathname;

    function handleChange(e) {
        setSearch(e.target.value);
        setSearchSaved(e.target.value);
        setIsSearchValid(e.target.closest("form").checkValidity());
    }

    function onSubmit(e) {
        e.preventDefault();
        localStorage.setItem("keyword", search);
        onSearchMovies(search);
    }

    function onSubmitSavedMovies(e) {
        e.preventDefault();
        onSearchSavedMovies(searchSaved);
    }

    React.useEffect(() => {
        setSearch(localStorage.getItem("keyword"));
    }, []);

    React.useEffect(() => {}, [searchValue]);

    return (
        <form
            className="search"
            onSubmit={location === "/movies" ? onSubmit : onSubmitSavedMovies}
        >
            <div className="search__form">
                <input
                    className="search__form-input"
                    type="text"
                    autoComplete="off"
                    placeholder={searchValue?.keyword || "Фильм"}
                    required
                    onChange={handleChange}
                    disabled={isInfoTooltipOpen}
                />
                <span
                    className={
                        isSearchValid ? "search__form-span_hidden" : "search__form-span"
                    }
                >
          Нужно ввести ключевое слово
        </span>
                <div className="search__form-container">
                    <button className="search__form-button_find" type="submit">
                        Найти
                    </button>
                    <FilterCheckbox
                        onShortMovies={onShortMovies}
                        isShortMovies={isShortMovies}
                    />
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
