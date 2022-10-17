import { Link } from 'react-router-dom'
import './footer.css'

export function Footer(){
    return (
    <footer id="footer">
        <div className='container'>
            <div className='row'>
                <div id="logo">
                    <Link to="/">
                        <picture>
                            <source srcSet='/img/logo-blanco.svg' alt="Merkopolis" />
                            <img src='/img/logo-blanco.png' alt="Merkopolis"/>
                        </picture>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='copyright'>
                    Copyright © 2020. Todos los derechos reservados. <strong>MERKOPOLIS S.A.S.</strong>
                </div>
            </div>
        </div>
         
    </footer>
    )
}