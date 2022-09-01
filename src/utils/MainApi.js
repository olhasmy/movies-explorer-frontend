const BASE_URL = "http://localhost:3001";
const MOVIES_URL = "https://api.nomoreparties.co";

export const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
};

//регистрация
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        credentials: "include",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    }).then((res) => handleResponse(res));
};

//авторизация
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        credentials: "include",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => handleResponse(res));
};

//проверка токена
export const checkToken = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        credentials: "include",
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
        },
    }).then((res) => handleResponse(res));
};

//получили информацию
export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        credentials: "include",
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => handleResponse(res));
};

//обновили информацию
export const setUserInfo = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        credentials: "include",
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
    }).then((res) => handleResponse(res));
};

//добавили фильм
export const saveMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        credentials: "include",
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country: movie.country || 'Страна не указана =(',
            director: movie.director || 'Нет =(',
            duration: movie.duration || 'Нет =(',
            year: movie.year || 'Нет =(',
            description: movie.description,
            image: `${MOVIES_URL}${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN || 'Нет =(',
            movieId: movie.id,
        }),
    }).then((res) => handleResponse(res));
};

//удаление фильма
export const deleteMovie = (_id) => {
    return fetch(`${BASE_URL}/movies/${_id}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => handleResponse(res));
};

//получили фильмы
export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        credentials: "include",
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => handleResponse(res));
};
