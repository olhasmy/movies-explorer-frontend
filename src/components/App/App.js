import React from "react";
import "./App.css";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";
import * as mainApi from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltiip/InfoTooltip";
import { errorMessages } from "../../utils/errorMessages";

function App() {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [movies, setMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [infoMessage, setInfoMessage] = React.useState("");
    const [searchValue, setSearchValue] = React.useState({});
    const [isShortMovies, setIsShortMovies] = React.useState(
        searchValue?.isCheckbox
    );
    const location = useLocation().pathname;

    function handleRegistration(name, email, password) {
        setLoading(true);
        mainApi
            .register(name, email, password)
            .then((res) => {
                if (res) {
                    setLoading(false);
                    setIsSuccess(true);
                    setInfoMessage("Вы успешно зарегистрировались!");
                    setIsInfoTooltipOpen(true);
                }
            })

            .then(() => {
                handleAuthorization(email, password);
            })
            .catch((e) => {
                setLoading(false);
                setIsSuccess(false);
                setInfoMessage(errorMessages(e));
                setIsInfoTooltipOpen(true);
            });
    }

    function handleAuthorization(email, password) {
        setLoading(true);
        mainApi
            .authorize(email, password)
            .then((data) => {
                localStorage.setItem("jwt", data.token);
                setLoggedIn(true);
                setLoading(false);
                history.push("/movies");
                setIsSuccess(true);
                setInfoMessage("Вы успешно авторизовались!");
                setIsInfoTooltipOpen(true);
            })
            .catch((e) => {
                setLoading(false);
                setIsSuccess(false);
                setInfoMessage(errorMessages(e));
                setIsInfoTooltipOpen(true);
            });
    }

    function handleSignOut(e) {
        e.preventDefault();
        setLoggedIn(false);
        setMovies([]);
        setSavedMovies([]);
        setCurrentUser({});
        localStorage.clear();
        history.push("/");
    }

    function handleUpdateUser(name, email) {
        mainApi
            .setUserInfo(name, email)
            .then((name, email) => {
                setCurrentUser(name, email);
                setIsSuccess(true);
                setIsInfoTooltipOpen(true);
                setInfoMessage("Данные успешно изменены!");
            })
            .catch((e) => {
                setInfoMessage(errorMessages(e));
                setIsInfoTooltipOpen(true);
            });
    }

    function handleAddMovie(newMovie) {
        mainApi
            .saveMovie(newMovie)
            .then((newMovie) => {
                setSavedMovies([...savedMovies, newMovie]);
            })
            .catch((e) => {
                setInfoMessage(errorMessages(e));
                setIsInfoTooltipOpen(true);
            });
    }

    function handleDislikeMovie(movie) {
        const movieForDelete = savedMovies.find(
            (item) => item.movieId === movie.id
        );
        mainApi
            .deleteMovie(movieForDelete._id)
            .then(() => {
                setSavedMovies((savedMovies) =>
                    savedMovies.filter((item) => item !== movieForDelete)
                );
            })
            .catch((e) => {
                setInfoMessage(errorMessages(e));
                setIsInfoTooltipOpen(true);
            });
    }

    function handleDeleteMovie(movie) {
        mainApi
            .deleteMovie(movie._id)
            .then(() => {
                setSavedMovies((savedMovies) =>
                    savedMovies.filter((item) => item !== movie)
                );
            })
            .catch((e) => {
                setInfoMessage(errorMessages(e));
                setIsInfoTooltipOpen(true);
            });
    }

    function closeInfoTooltip() {
        setIsInfoTooltipOpen(false);
    }

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
    }

    function handleSearchMoviesByKeyword(movies, keyword) {
        let foundMovies = [];

        if (location === "/movies") {
            movies.forEach((movie) => {
                if (movie.nameRU.toLowerCase().indexOf(keyword) > -1) {
                    if (isShortMovies) {
                        movie.duration <= 40 && foundMovies.push(movie);
                    } else {
                        foundMovies.push(movie);
                    }
                }
            });
        } else {
            savedMovies.forEach((movie) => {
                if (movie.nameRU.toLowerCase().indexOf(keyword) > -1) {
                    if (isShortMovies) {
                        movie.duration <= 40 && foundMovies.push(movie);
                    } else {
                        foundMovies.push(movie);
                    }
                }
            });
        }
        return foundMovies;
    }

    function handleSearchMovies(keyword, isCheckbox) {
        setLoading(true);
        setMovies([]);

        if (movies.length === 0) {
            moviesApi
                .getMovies()
                .then((resMovies) => {
                    setMovies(resMovies);
                    const searchResult = handleSearchMoviesByKeyword(resMovies, keyword);
                    if (searchResult.length === 0) {
                        setMovies([]);
                        setIsInfoTooltipOpen(true);
                        setInfoMessage("Ничего не найдено");
                    } else {
                        localStorage.setItem("foundMovies", JSON.stringify(searchResult));
                        setSearchValue({ ...searchValue, keyword: keyword });
                        localStorage.setItem(
                            "searchValue",
                            JSON.stringify({ isCheckbox, keyword })
                        );
                        setMovies(JSON.parse(localStorage.getItem("foundMovies")));
                    }
                })
                .catch(() => {
                    setMovies([]);
                    setIsInfoTooltipOpen(true);
                    setInfoMessage("Ничего не найдено");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            const searchResult = handleSearchMoviesByKeyword(movies, keyword);
            if (searchResult.length === 0) {
                setMovies([]);
                setLoading(false);
                setIsInfoTooltipOpen(true);
                setInfoMessage("Ничего не найдено");
            } else if (searchResult.length !== 0) {
                localStorage.setItem("foundMovies", JSON.stringify(searchResult));
                setMovies(JSON.parse(localStorage.getItem("foundMovies")));
                setLoading(false);
            } else {
                setMovies([]);
                setIsInfoTooltipOpen(true);
                setInfoMessage("Ничего не найдено");
            }
        }
    }

    function handleSearchSavedMovies(keyword) {
        const searchResult = handleSearchMoviesByKeyword(savedMovies, keyword);
        if (searchResult.length === 0) {
            setIsInfoTooltipOpen(true);
            setInfoMessage("Ничего не найдено");
        }
        setSavedMovies(searchResult);
    }

    React.useEffect(() => {
        const localSearchMovies = localStorage.getItem("foundMovies");
        const localSearchValue = localStorage.getItem("searchValue");

        if (loggedIn && localSearchValue && localSearchMovies) {
            setMovies(JSON.parse(localSearchMovies));
            setSearchValue(JSON.parse(localSearchValue));
        }
    }, [loggedIn]);

    React.useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === "Escape") {
                closeInfoTooltip();
            }
        };
        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem("jwt")) {
            const token = localStorage.getItem("jwt");
            mainApi
                .checkToken(token)
                .then(() => {
                    if (location === "/signin") {
                        setLoggedIn(true);
                        history.push("/movies");
                    } else {
                        setLoggedIn(true);
                    }
                })
                .catch((e) => {
                    setInfoMessage(errorMessages(e));
                    setIsInfoTooltipOpen(true);
                });
        }
    }, [location, history, loggedIn]);

    React.useEffect(() => {
        if (localStorage.getItem("jwt")) {
            setLoggedIn(true);
            Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
                .then(([info, savedMovies]) => {
                    setCurrentUser(info);
                    setSavedMovies(savedMovies);
                })
                .catch((e) => {
                    setInfoMessage(errorMessages(e));
                    setIsInfoTooltipOpen(true);
                });
        }
    }, [loggedIn]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Main} />
                    <ProtectedRoute
                        path="/movies"
                        component={Movies}
                        movies={movies}
                        savedMovies={savedMovies}
                        loggedIn={loggedIn}
                        loading={loading}
                        onAddMovie={handleAddMovie}
                        onDislikeMovie={handleDislikeMovie}
                        onSearchMovies={handleSearchMovies}
                        onShortMovies={handleShortMovies}
                        searchValue={searchValue}
                        isShortMovies={isShortMovies}
                        isInfoTooltipOpen={isInfoTooltipOpen}
                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        loading={loading}
                        movies={movies}
                        savedMovies={savedMovies}
                        onDeleteMovie={handleDeleteMovie}
                        onSearchSavedMovies={handleSearchSavedMovies}
                        onShortMovies={handleShortMovies}
                        isInfoTooltipOpen={isInfoTooltipOpen}
                    />
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        path="/profile"
                        onUpdateUser={handleUpdateUser}
                        loading={loading}
                        onSignOut={handleSignOut}
                        component={Profile}
                    />
                    <Route path="/signin">
                        <Login onAuth={handleAuthorization} loading={loading} />
                    </Route>
                    <Route path="/signup">
                        <Register onReg={handleRegistration} loading={loading} />
                    </Route>
                    <Route path="/*" component={NotFound} />
                </Switch>
                <InfoTooltip
                    isOpen={isInfoTooltipOpen}
                    onClose={closeInfoTooltip}
                    isSuccess={isSuccess}
                    infoMessage={infoMessage}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
