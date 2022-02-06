import React from "react";
import ImgSuccess from "../../images/CheckMark.svg";
import ImgBad from "../../images/Cross.svg";
import buttonClose from "../../images/CloseIcon.svg";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, isSuccess, infoMessage }) {
    return (
        <div className={`popup ${ isOpen ? "popup_visible" : "" }`}>
            <div className="popup-overlay" onClick={ onClose } />
            <div className="popup-form">
                <img src={ isSuccess ? ImgSuccess : ImgBad } alt={ infoMessage }/>
                <h2 className="popup-form__title">{ infoMessage }</h2>
                <button aria-label="Close" type="button" className="popup-form__close-icon" onClick={ onClose }>
                    <img src={ buttonClose } className="popup-form__close" alt="Крестик закрытия окна"/>
                </button>
            </div>
        </div>
    );
}

export default InfoTooltip;
