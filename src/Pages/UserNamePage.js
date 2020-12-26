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
import {initialValues,validationSchema} from "../components/UserData";

const UserNamePage =() => {
    const history = useHistory();

    const formik = useFormik({
        initialValues,
        validationSchema,
    })

    const handleSubmit = () => {
        console.log("clicked")
        history.push("/UserPhysicInfo");
    }
        return (
            <div className="page-wraper">
                    <div className="container">
                        <div className="UserNamePage">
                            <div className ="center-wraper">
                                <h1>Hello There</h1>
                                    <form>
                                        <div className="form control">
                                            <Form01 name="userName" placeholder="Type Your Name" changeHandler={formik.handleChange} value={formik.values.userName} handleBlur={formik.handleBlur}/>
                                                {formik.touched.userName && formik.errors.userName ? <div className = "error">{formik.errors.userName}</div> : null}
                                            <SubmitBtn handleSubmit={handleSubmit}/>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
            </div>
    );
}
export default UserNamePage;