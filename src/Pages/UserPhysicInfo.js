import "../scss/common.scss";
import "../scss/UserPhysicInfo.scss";
import Form01 from "../components/InputForm";
import SubmitBtn from "../components/SubmitBtn";
import React, {useState,setState} from "react";

let UserPhysicInfo = () =>{

    // validation  
    return (
        <div className="page-wraper">
            {/* <div className="container">
                <div className="UserPhysicInfo">
                    <header>
                        <h1>Hello User</h1>
                        <p>Please fill the form</p>
                    </header>
                    <footer>
                        <ul>
                            <li>
                                <div><p>Your Age</p></div>
                                <div>
                                    <Form01 value={userAge} setValue={setUserHeight} placeholder="Ex: 20"/>
                                </div>
                            </li>
                            <li>
                                <div><p>Your Weight</p></div>
                                <div>
                                    <Form01 value={userWeight} setValue={setUserAge} placeholder="Ex: 140 lb"/>
                                </div>
                            </li>
                            <li>
                                <div><p>Your Height</p></div>
                                <div>
                                    <Form01 value={userHeight} setValue={setUserWeight} placeholder="Ex: 6.5 ft"/>
                                </div>
                            </li>
                        </ul>
                    </footer>
                </div>
                <SubmitBtn/>
            </div> */}
        </div>
    );
};

export default UserPhysicInfo;