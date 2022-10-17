import './navBar.css';


import { CartWidget } from './CartWidget/CartWidget';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import { SubHeader } from './SubHeader/SubHeader';
export function NavBar(){
    


    return(
        <>
            <SubHeader />
            <header className='container-fluid'>
                
                <div className='row'>
                    <div className='container-logo'>
                        <Logo altImage='Merkopolis'/>
                    </div>
                    <div className='container-menu container-fluid'>
                        <div className='row'>
                            <Menu btnTitleMenu="Más opciones de viaje"/>
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}