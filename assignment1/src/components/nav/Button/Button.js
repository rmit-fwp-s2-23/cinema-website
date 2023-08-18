import "./Button.css";

function Button(props){
    return(
        <div className="button">
            <button>{props.type}</button>
        </div>
    )
}

export default Button;