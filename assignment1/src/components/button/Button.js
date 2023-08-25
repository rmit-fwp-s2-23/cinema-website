import "./Button.css";

function Button({ onClick, children }){
    return(
        <div className="button">
            <button onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;