import React from "react";
import "./App.css";
import {Route, Switch, useHistory} from "react-router-dom";
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
    const [isShortMovies, setIsShortMovies] = React.useState(false);
    const userSavedMovies = savedMovies.filter(
        (movie) => !movie.owner || (movie.owner.id ?? movie.owner) === currentUser._id,
    );

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
            .then((res) => {
                localStorage.setItem("jwt", res.jwt);
                setLoggedIn(true);
                history.push("/movies");
                setLoading(false);
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
        localStorage.removeItem("jwt");
        localStorage.removeItem("foundMovies");
        localStorage.removeItem("searchValue");
        localStorage.removeItem("isShortMovies");
        localStorage.clear();
        setLoggedIn(false);
        history.push("/");
    }

    function handleUpdateUser(name, email) {
        mainApi
            .setUserInfo(name, email)
            .then((name, email) => {
                setCurrentUser({name, email});
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
            .catch(() => {
                setInfoMessage("Не удалось сохранить фильм :(");
                setIsInfoTooltipOpen(true);
            });
    }

    function handleDislikeMovie(movie) {
        const movieForDelete = userSavedMovies.find(
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

    function handleShortMovies(e) {
        setIsShortMovies(e.target.checked);
    }

    function handleSearchMoviesByKeyword(movies, keyword) {
        let foundMovies = [];
        movies.forEach((movie) => {
            if (movie.nameRU.toLowerCase().indexOf(keyword) > -1) {
                if (isShortMovies) {
                    movie.duration <= 40 && foundMovies.push(movie);
                } else {
                    foundMovies.push(movie);
                }
            }
        });
        return foundMovies;
    }

    function handleSearchMovies(keyword) {
        setLoading(true);
        setMovies([]);

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
                    localStorage.setItem("searchValue", JSON.stringify({ keyword }));
                    setMovies(JSON.parse(localStorage.getItem("foundMovies")));
                    localStorage.setItem("isShortMovies", JSON.stringify(isShortMovies));
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
    }

    function handleSearchSavedMovies(keyword) {
        setLoading(true);

        mainApi
            .getSavedMovies()
            .then((savedMovies)=>{
                setSavedMovies(savedMovies);
                const searchResult = handleSearchMoviesByKeyword(savedMovies, keyword);
                if (searchResult.length === 0) {
                    setSavedMovies([]);
                    setIsInfoTooltipOpen(true);
                    setInfoMessage("Ничего не найдено");
                } else {
                    setSavedMovies(searchResult);
                }
            })
            .catch(() => {
                setSavedMovies([]);
                setIsInfoTooltipOpen(true);
                setInfoMessage("Ничего не найдено");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    React.useEffect(() => {
        const localSearchMovies = localStorage.getItem("foundMovies");
        const localSearchValue = localStorage.getItem("searchValue");
        const localShotMovies = localStorage.getItem("isShortMovies");

        if (localSearchValue && localSearchMovies && localShotMovies) {
            setMovies(JSON.parse(localSearchMovies));
            setSearchValue(JSON.parse(localSearchValue));
            setIsShortMovies(JSON.parse(localShotMovies));
        }
    }, []);

    React.useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === "Escape") {
                closeInfoTooltip();
            }
        };
        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, []);

    // React.useEffect(() => {
    //     if (localStorage.getItem("jwt")) {
    //         const token = localStorage.getItem("jwt");
    //         mainApi
    //             .checkToken(token)
    //             .then(() => {
    //                 setLoggedIn(true);
    //             })
    //             .catch((e) => {
    //                 setInfoMessage(errorMessages(e));
    //                 setIsInfoTooltipOpen(true);
    //             });
    //     }
    // }, [loggedIn]);

    React.useEffect(() => {
        if (localStorage.getItem("jwt")) {
            const token = localStorage.getItem("jwt");
            Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies(), mainApi.checkToken(token)])
                .then(([info, savedMovies]) => {
                    setLoggedIn(true);
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
                    <Route exact path="/" component={Main} loggedIn={loggedIn}/>
                    <ProtectedRoute
                        path="/movies"
                        component={Movies}
                        movies={movies}
                        userSavedMovies={userSavedMovies}
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
                        userSavedMovies={userSavedMovies}
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
