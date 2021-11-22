import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Words from '../../../images/movie33film.jpg';
import Dis from '../../../images/movieDis.jpg';
import Real from '../../../images/movieReal.jpg';
import Run from '../../../images/movieRun.jpg';
import RunFor from '../../../images/movieVpogonr.jpg';
import Sale from '../../../images/moviTorg.jpg';
import Germany from '../../../images/movieGermany.jpg';
import MoviesCardMore from "../MoviesCardMoreButton/MoviesCardMore";

function MoviesCardList({ saved }) {

    return (
        <>
            <ul className="cards">
                <MoviesCard name="33 слова о дизайне" duration="1ч 42м" pic={Words} saved={ saved }/>
                <MoviesCard name="Киноальманах «100 лет дизайна»" duration="1ч 42м" pic={Dis} saved={ saved }/>
                <MoviesCard name="В погоне за Бенкси" duration="1ч 42м" pic={RunFor} saved={ saved }/>
                <MoviesCard name="Баския: Взрыв реальности" duration="1ч 42м" pic={Real} saved={ saved }/>
                <MoviesCard name="Бег это свобода" duration="1ч 42м" pic={Run} saved={ saved }/>
                <MoviesCard name="Книготорговцы" duration="1ч 42м" pic={Sale} saved={ saved }/>
                <MoviesCard name="Когда я думаю о Германии ночью" duration="1ч 42м" pic={Germany} saved={ saved }/>
            </ul>
            <MoviesCardMore />
        </>
    );
}

export default MoviesCardList;
