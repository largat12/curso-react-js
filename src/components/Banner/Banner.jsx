import './banner.css';

export function Banner(){
    return (
        <div id="banner">
            <a href="https://www.viajesexito.com/vuelos-baratos/aerolineas/avianca" >
                <picture className="desktop d-none d-md-block banner-computador">
                    <source alt="avianca" srcSet="https://www.viajesexito.com/Portals/1/Skins/renovacion/img/semana43/AV-PRINCIPAL-DESKTOP_11zon.webp" />
                    <img alt="avianca" src="https://www.viajesexito.com/portals/1/Skins/renovacion/img/semana43/1AV-PRINCIPAL-DESKTOP.jpg" /> 
                </picture>
                <picture className="mobile d-block d-md-none banner-movil">
                    <source alt="avianca" srcSet="https://www.viajesexito.com/Portals/1/Skins/renovacion/img/semana43/AV-PRINCIPAL-MOBILE_11zon.webp" />
                    <img alt="avianca" src="https://www.viajesexito.com/portals/1/Skins/renovacion/img/semana43/1AV-PRINCIPAL-MOBILE.jpg" /> 
                </picture>
            </a>
        </div>
    )
}