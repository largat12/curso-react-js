import './logo.css';


import { Link } from 'react-router-dom';

export function Logo(props){
    return (
        <div id="logo">
            <Link to="/">
                <picture>
                    <source srcSet='/img/logo-color.svg' alt={props.AltLogo} />
                    <img src='/img/logo-color.png' alt={props.AltLogo}/>
                </picture>
            </Link>
        </div> 
    )
}