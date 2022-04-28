import React  from "react";
import './button.css'
function Button(props){
    // console.log(props)
    return (
        <button onClick={props.onclick} class="right-button">
    
            <div class="icon-container">
            {props.icon}
            </div>

            {props.name}
    
    </button>
        )
}

export default Button;