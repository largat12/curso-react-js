import "./404.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft }  from "@fortawesome/free-solid-svg-icons";

export function Error404(){
    return (<div className="container-fluid error-404">
                <div className="row">
                    <div className="container content-error-404">
                        <div className="row">
                            <h1 className="titulo">Página no encontrada</h1>
                            <p>Parece que no se encontró nada en esta ubicación. Tal vez intente una búsqueda?</p>
                            <Link to="/"><FontAwesomeIcon icon={faAngleLeft} /> Volver al inicio</Link>
                        </div>
                    </div>
                </div>
            </div>);
}