import { Link } from "react-router-dom";
import Button from "../../buttons/button";
import LinkButton from "../../buttons/link";
import './header.css'
function EmployeeHeader2 (props){
    return (
        <div class="heading">
            <h1>{props.title}</h1>
            
            
        </div>
    );
}

export default EmployeeHeader2;