import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className="project" id="project">
            <h1 className="project__header">О проекте</h1>
            <div className="project__info">
                <div
                >
                    <h2 className="project__info-header">Дипломный проект включал 5 этапов</h2>
                    <p className="project__info-header_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div>
                    <h2 className="project__info-header">На выполнение диплома ушло 5 недель</h2>
                    <p className="project__info-header_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__graph">
                <div className="project__graph-back">
                    <h2 className="project__graph-weeks project__graph-weeks_back">1 неделя</h2>
                    <p className="project__graph-stack">Back-end</p>
                </div>
                <div className="project__graph-front">
                    <h2 className="project__graph-weeks project__graph-weeks_front">4 недели</h2>
                    <p className="project__graph-stack">Front-end</p>
                </div>
            </div>
        </div>
    );
}

export default AboutProject;
