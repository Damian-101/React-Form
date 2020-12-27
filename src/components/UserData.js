import React from "react";
import * as Yup from "yup";
import { useFormik, addMethod } from "formik"
import { useHistory } from "react-router-dom";

// yup.addMethod(Yup.type, `validationCheck`, function(formats, parseStrict) {
//     return (function(value) {
//         if (isValid = true)
//             return isValid
//     })
// })
export const initialValues = () => {
    let userName = ""
    let userWeight = ""
    let userHeight = ""
    let userAge = ""
}

export const validationSchema1 = Yup.object({
    userName: Yup.string()
        .min(3, "Too Short!")
        .max(8, "Too Long!")
        .required("Required!"),
});

export const validationSchema = Yup.object({
    userAge: Yup.string()
        .required("Required!")
        .max(3, "Invalid Characters")
        .matches(/\d/, "Invalid Characters"),

    userWeight: Yup.string()
        .required("Required!")
        .max(3, "Invalid Characters")
        .matches(/\d/, "Invalid Characters"),
    userHeight: Yup.string()
        .required("Required!")
        .max(3, "Invalid Characters")
        .matches(/\d/, "Invalid Characters")
});

export const onSubmit = (values) => {
    console.log(values)
}