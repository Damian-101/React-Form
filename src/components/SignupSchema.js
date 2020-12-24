import React from "react"
import * as Yup from "yup"

export const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "Too short!")
        .max(4, "Too Long")
        .required("Required"),
});