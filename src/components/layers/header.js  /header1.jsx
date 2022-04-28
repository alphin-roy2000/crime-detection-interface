import { Link } from "react-router-dom";
import Button from "../../buttons/button";
import LinkButton from "../../buttons/link";
import './header.css'
function EmployeeHeader1 (props){
    return (
        <div class="heading">
            <h1>{props.title}</h1>
            {props.filter != "true"? <button>filter</button>:<div></div>}
            <LinkButton name={props.name} icon={props.icon}/>
        </div>
    );
}

export default EmployeeHeader1;