// import "../scss/InputBar.scss";
// import "../scss/common.scss";
// import "../scss/InputBar.scss";
// import "../scss/SubmitBtn.scss";
// import "../scss/UserNamePage.scss";
// import SubmitBtn from "../components/SubmitBtn";
// import Form01 from "../components/InputForm";
// import React, {useState} from "react";
// import {useHistory} from "react-router-dom";
// import {Formik,Form,Field,useFormik} from "formik";
// import {initialValues,onSubmit,validationSchema} from "../components/UserData";
// import * as Yup from "yup"

// const UserNamePage =() => {
//     const formik = useFormik({
//         initialValues,
//         validationSchema,
//         onSubmit,
//     })
//     console.log(formik)

//     const isSubmitting = formik.isSubmitting
//     const history = useHistory();

//     // page change
//     if (isSubmitting===true){
//         history.push("/UserPhysicInfo")
//     }

//     let handleSubmit = formik.handleSubmit
//         return (
//             <div className="page-wraper">
//                     <div className="container">
//                         <div className="UserNamePage">
//                             <div className ="center-wraper">
//                                 <h1>Hello There</h1>
//                                     <form>
//                                         <div className="form control">
//                                             <Form01 name="userName" placeholder="Type Your Name" changeHandler={formik.handleChange} value={formik.values.userName} handleBlur={formik.handleBlur}/>
//                                                 {formik.touched.userName && formik.errors.userName ? <div className="error">{formik.errors.userName}</div> :null}
//                                             <SubmitBtn handleSubmit={handleSubmit}/>
//                                         </div>
//                                     </form>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//     );
// }
// export default UserNamePage;