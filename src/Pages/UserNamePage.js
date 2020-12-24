import "../scss/InputBar.scss";
import "../scss/common.scss";
import "../scss/InputBar.scss";
import "../scss/SubmitBtn.scss";
import "../scss/UserNamePage.scss";
import SubmitBtn from "../components/SubmitBtn";
import Form01 from "../components/InputForm";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Formik,Form,Field,useFormik} from "formik";
import {SignupSchema} from "../components/SignupSchema";

const UserNamePage =() => {
    const formik = useFormik({
        initialValues:{
            userName: "",
            weight: "",
        }
    })

    console.log(formik.values)
        return (
            <div className="page-wraper">
                    <div className="container">
                        <div className="UserNamePage">
                            <div className ="center-wraper">
                                <h1>Hello There</h1>
                                    <form>
                                        <Form01 name="userName" placeholder="Type Your Name" changeHandler={formik.handleChange} value={formik.values.userName}/>
                                        <SubmitBtn/>
                                    </form>
                            </div>
                        </div>
                    </div>
            </div>
    );
}
export default UserNamePage;