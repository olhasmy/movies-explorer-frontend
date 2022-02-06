import React, {useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardMore from '../MoviesCardMore/MoviesCardMore';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, savedMovies, onAddMovie, onDeleteMovie, onDislikeMovie }) {
    const [windowResizing, setWindowResizing] = useState(false);
    const [shownMovies, setShownMovies] = React.useState([]);
    const [shownMoviesCount, setShownMoviesCount] = React.useState(0);
    const [showButtonMore, setShowButtonMore] = React.useState(false);
    const [addedMoviesCount, setAddedMoviesCount] = React.useState(0);
    const location = useLocation().pathname;
    const windowWidth = window.innerWidth;

    function handleMoreClick() {
        setShownMovies(movies.slice(0, shownMovies.length + addedMoviesCount));
        if (shownMovies.length >= movies.length - addedMoviesCount) {
            setShowButtonMore(false);
        }
    }

    React.useEffect(() => {
        if (windowWidth >= 645) {
            setShownMoviesCount(7);
            setAddedMoviesCount(7);
        } else {
            setShownMoviesCount(5);
            setAddedMoviesCount(5);
        }
    }, [windowWidth, windowResizing]);

    React.useEffect(() => {
        setShownMovies(movies.slice(0, shownMoviesCount));
        if (movies.length <= shownMoviesCount) {
            setShowButtonMore(false);
        } else {
            setShowButtonMore(true);
        }
    }, [shownMoviesCount, movies]);

    React.useEffect(() => {
        let timeout;
        const handleResize = () => {
            clearTimeout(timeout);
            setWindowResizing(true);
            timeout = setTimeout(() => {
                setWindowResizing(false);
            }, 200);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ul className="cards">
            { location === '/movies' ?
                <>
                    { shownMovies.map(movie => (
                        <MoviesCard
                            key={ movie.id || movie._id }
                            movie={ movie }
                            onAddMovie={ onAddMovie }
                            onDeleteMovie={ onDeleteMovie }
                            onDislikeMovie={ onDislikeMovie }
                            movies={ movies }
                            savedMovies={ savedMovies }
                        />
                    ))}
                    <MoviesCardMore onMoreClick={ handleMoreClick } showButtonMore={showButtonMore}/>
                </>
                :
                <>
                    { savedMovies.slice(0).reverse().map(movie => (
                        <MoviesCard
                            key={ movie.id || movie._id }
                            movie={ movie }
                            onAddMovie={ onAddMovie }
                            onDeleteMovie={ onDeleteMovie }
                            onDislikeMovie={ onDislikeMovie }
                            movies={ movie }
                            savedMovies={ savedMovies }
                        />
                    ))}
                </>
            }
        </ul>
    );
}

export default MoviesCardList;
