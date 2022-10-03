import './logo.css';

import logoSVG from '../../../img/logo.svg'
import logoPNG from '../../../img/logo.png';
import { Link } from 'react-router-dom';


export function Logo(props){
    return (
        <div id="logo">
            <Link to="/">
                <picture>
                    <source srcSet={logoSVG} alt={props.AltLogo} />
                    <img src={logoPNG} alt={props.AltLogo}/>
                </picture>
            </Link>
        </div> 
    )
}