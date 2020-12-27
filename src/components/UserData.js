import React from "react";
import * as Yup from "yup";

export const initialValues = () => {
    let userWeight = ""
    let userHeight = ""
    let userAge = ""
}

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