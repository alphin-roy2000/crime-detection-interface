import React  from "react";
import { Link } from "react-router-dom";
import './button.css'
function LinkButton(props){
    // console.log(props)
    return (
        <Link to='create' class="right-button">
    
            <div class="icon-container">
            {props.icon}
            </div>

            {props.name}
    
    </Link>
        )
}

export default LinkButton;