import './logo.css';

import logoSVG from '../../../img/logo.svg'
import logoPNG from '../../../img/logo.png';


export function Logo(props){
    return (
        <div id="logo">
            <picture>
                <source srcSet={logoSVG} alt={props.AltLogo} />
                <img src={logoPNG} alt={props.AltLogo}/>
            </picture>
        </div> 
    )
}