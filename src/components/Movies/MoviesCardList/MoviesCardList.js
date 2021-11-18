import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Words from '../../../images/33film.jpg';
import Dis from '../../../images/pic__COLOR_pic.jpg';
import Real from '../../../images/real.jpg';
import Run from '../../../images/run.jpg';
import RunFor from '../../../images/vpogonr.jpg';
import Sale from '../../../images/torg.jpg';
import Germany from '../../../images/rfr.jpg';

function MoviesCardList({ saved }) {

    return (
        <ul className="cards">
            <MoviesCard name="33 слова о дизайне" duration="1ч 42м" pic={Words} saved={ saved }/>
            <MoviesCard name="Киноальманах «100 лет дизайна»" duration="1ч 42м" pic={Dis} saved={ saved }/>
            <MoviesCard name="В погоне за Бенкси" duration="1ч 42м" pic={RunFor} saved={ saved }/>
            <MoviesCard name="Баския: Взрыв реальности" duration="1ч 42м" pic={Real} saved={ saved }/>
            <MoviesCard name="Бег это свобода" duration="1ч 42м" pic={Run} saved={ saved }/>
            <MoviesCard name="Книготорговцы" duration="1ч 42м" pic={Sale} saved={ saved }/>
            <MoviesCard name="Когда я думаю о Германии ночью" duration="1ч 42м" pic={Germany} saved={ saved }/>
        </ul>
    );
}

export default MoviesCardList;
