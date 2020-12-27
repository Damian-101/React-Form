import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import "../scss/common.scss";
import "../scss/SubmitBtn.scss";
import React  from "react";

 const SubmitBtn = (props) => {
    let btnValidation = {
        opacity: "10%"
    }
    if (10>7){
        btnValidation={
            opacity: "100%"
        }
    }
    return (
            <div className="SubmitBtn"
             onClick={props.handleSubmit}
             style={btnValidation} id="page">
                <div className="SubmitIcon">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
    );
}

export default SubmitBtn;