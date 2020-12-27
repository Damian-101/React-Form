import "../scss/UserNamePage.scss";
import "../scss/InputBar.scss";
import React, {useState, useContext} from "react";
import "../scss/common.scss";
import * as yup from "yup";
import SubmitBtn from "./SubmitBtn";
import {BrowserRouter} from "react-router-dom";
import UserNamePage from "../Pages/UserNamePage";
import { Formik,useFormik } from "formik";
import {initialValues,validationSchema,onSubmit} from "./UserData";
 
const Form01 =(props) => {
    return(
        <div className="UserForm">
            <div className="InputBar">
                <input type="text"
                    name={props.name}
                    onChange={props.changeHandler}
                    id="Input" 
                    autoComplete="off"
                    value={props.value}
                    className="input"
                    href={props.href}
                    placeholder={props.placeholder}
                    onBlur = {props.handleBlur}
                />
            </div>
        </div>
    );
}
export default Form01;