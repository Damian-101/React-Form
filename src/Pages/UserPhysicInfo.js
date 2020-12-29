import "../scss/common.scss";
import "../scss/UserPhysicInfo.scss";
import Form01 from "../components/InputForm";
import SubmitBtn from "../components/SubmitBtn";
import React from "react";
import {initialValues,validationSchema,onSubmit} from "../components/UserData"
import {useFormik} from "formik"
import {useHistory} from "react-router-dom";

const UserPhysicInfo = () =>{
const history = useHistory();

const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
let handleSubmit = formik.handleSubmit
    // change page 
    const isValid = formik.isValid;
    const touched = formik.touched.userAge;
    
handleSubmit = () => {
    if (touched===true&&isValid===true){
        history.push("/MainPage")
    }
}
console.log(touched)
    return (
        <div className="page-wraper">
            <div className="container">
                <div className="UserPhysicInfo">
                    <div className="content">
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
                                    {formik.touched.userHeight && formik.errors.userHeight ? <div className="error">{formik.errors.userHeight}</div> :null}
                                </div>
                            </li>
                        </ul>
                    </footer>
                    </div>
                </div>
                <SubmitBtn handleSubmit={handleSubmit}/>
            </div>
        </div>
    );
};

export default UserPhysicInfo;