import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <div className="techs">
            <h2 className="techs__header">Технологии</h2>
            <div className="techs__info">
                <h3 className="techs__info-header">7 технологий</h3>
                <h4 className="techs__info-text">
                    На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.
                </h4>
            </div>
            <ul className="techs__info-list">
                <li className="techs__info-list_item">HTML</li>
                <li className="techs__info-list_item">CSS</li>
                <li className="techs__info-list_item">JS</li>
                <li className="techs__info-list_item">React</li>
                <li className="techs__info-list_item">Git</li>
                <li className="techs__info-list_item">Express.js</li>
                <li className="techs__info-list_item">mongoDB</li>
            </ul>
        </div>
    );
}

export default Techs;
