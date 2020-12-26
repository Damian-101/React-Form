import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik"


export const initialValues = () => {
    let userName = ""
    let userWeight = ""
    let userHeight = ""
    let userAge = ""
}
export const validationSchema = Yup.object({
    userName: Yup.string()
        .min(2, "Too Short!")
        .max(8, "Too Long!")
        .required("Required!"),

    userAge: Yup.string()
        .max(3, "Invalid Characters")
        .matches(/\d/, "Invalid Characters"),

    userWeight: Yup.string()
        .max(3, "Invalid Characters")
        .matches(/\d/, "Invalid Characters"),
});

export const onSubmit = values => {
    console.log(values)
}