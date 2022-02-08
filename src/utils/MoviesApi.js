import { handleResponse } from "./MainApi";

//получили фильмы
export const getMovies = () => {
    return fetch(`https://api.nomoreparties.co/beatfilm-movies`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => handleResponse(res));
};
