import Button from "../../buttons/button";
import './header.css'
function EmployeeHeader (props){
    return (
        <div class="heading">
            <h1>{props.title}</h1>
            {props.filter == "true"? <button>filter</button>:<div></div>}
            <Button name={props.name} icon={props.icon} onclick={props.onclick}/>
        </div>
    );
}

export default EmployeeHeader;