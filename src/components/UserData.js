import React from "react";

export const initialValues = () => {
    let userName= ""
    let weight= ""
}

export const validate = values => {
    let error={}
    if (!values.name) {
        error.name = "Required"
        console.log(error.name)
    }
    return error;
}