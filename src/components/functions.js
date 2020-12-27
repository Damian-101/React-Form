import { useHistory } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";

export default functions = () => {
    const pageSubmit = () => {
        const history = useHistory();
        console.log("clicked")
        // history.push("/UserPhysicInfo");
    }
    return(
        <SubmitBtn pageSubmit={pageSubmit}/>
    )
}