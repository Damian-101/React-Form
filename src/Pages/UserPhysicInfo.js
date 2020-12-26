import "../scss/common.scss";
import "../scss/UserPhysicInfo.scss";
import Form01 from "../components/InputForm";
import SubmitBtn from "../components/SubmitBtn";
import React from "react";
import {initialValues,validationSchema} from "../components/UserData"
import {useFormik} from "formik"

const UserPhysicInfo = () =>{

const formik = useFormik({
        initialValues,
        validationSchema,
    })
 const handleSubmit = (values) => {
    console.log(formik.values)
}
console.log(formik.errors)
    return (
        <div className="page-wraper">
            <div className="container">
                <div className="UserPhysicInfo">
                    <header>
                        <h1>Hello User</h1>
                        <p>Please fill the form</p>
                    </header>
                    <footer>
                        <ul>
                            {/* form 1 */}
                            <li>

                                <div>
                                    <p>Your Age</p>
                                </div>
                                    <div className="InputWraper">
                                        <Form01 name="userAge" value={formik.values.userName} handleBlur= {formik.handleBlur} changeHandler={formik.handleChange}  handleSubmit={formik.handleSubmit} placeholder="Ex: 20"/>
                                            {formik.touched.userAge && formik.errors.userAge ? <div className="error">{formik.errors.userAge}</div> :null}
                                    </div>

                            </li>
                            {/* form 2 */}
                            <li>
                                <div>
                                    <p>Your Weight</p>
                                </div>
                                <div>
                                    <Form01 name="userWeight" values={formik.values.userWeight} handleBlur={formik.handleBlur} changeHandler={formik.handleChange} placeholder="Ex: 140 lb"/>
                                    {formik.touched.userWeight && formik.errors.userWeight ? <div className="error">{formik.errors.userWeight}</div> :null}
                                </div>
                            </li>
                            {/* form 3 */}
                            <li>
                                <div>
                                    <p>Your Height</p>
                                </div>
                                <div>
                                    <Form01 name="userHeight" values={formik.values.userHeight} onBlur={formik.handleBlur} changeHandler={formik.handleChange} placeholder="Ex: 6.5 ft"/>
                                </div>
                            </li>
                        </ul>
                    </footer>
                </div>
                <SubmitBtn handleSubmit={handleSubmit}/>
            </div>
        </div>
    );
};

export default UserPhysicInfo;