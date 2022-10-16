import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft }  from "@fortawesome/free-solid-svg-icons";
import "./errorLoading.css"


export function ErrorLoading( {errorMessage} ){

    return (
        <div className="content-error">
            <h1>...Opps lo sentimos...</h1>
            <p>{errorMessage}</p>
            <Link to="/"><FontAwesomeIcon icon={faAngleLeft} /> Volver al inicio</Link>
        </div>
    )

}