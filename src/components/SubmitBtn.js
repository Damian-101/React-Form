import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "../scss/common.scss";
import "../scss/SubmitBtn.scss";
import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";

 const SubmitBtn = (props) => {
     const functionsClicked = () => {
         props.handleSubmit();
        //  props.pageValidation();
     }
    let btnValidation = {
        opacity: "10%"
    }
    if (10>7){
        btnValidation={
            opacity: "100%"
        }
    }
    return (
            <div className="SubmitBtn" onClick={functionsClicked} style={btnValidation} id="page">
                <div className="SubmitIcon">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
    );
}

export default SubmitBtn;