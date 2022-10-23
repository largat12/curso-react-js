import './publicidad.css';
import { Link } from "react-router-dom";

export function Publicidad(){
    return (
        <div className="container container-publicidad">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="publicidad">
                        <p className="texto">Frutas</p>
                        
                        <picture className="imagen">
                            <Link to='/category/frutas'>
                                <img src="/img/banners/publicidad-frutas.jpg" alt="banner categoria frutas" />
                            </Link>
                        </picture>
                    </div>
                </div>
                <div className="col-12 col-sm-8 display-flex">
                    <div className="container">
                        <div className="row" >
                            <div className="col-12 col-sm-6">
                                <div className="publicidad">
                                    <p className="texto">Verduras</p>
                                    <picture className="imagen">
                                        <Link to='/category/verduras'>
                                            <img src="/img/banners/publicidad-verduras.jpg" alt="banner categoria verduras" />
                                        </Link>
                                    </picture>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="publicidad">
                                    <p className="texto">Productos</p>
                                    <picture className="imagen">
                                        <Link to='/productos'>
                                            <img src="/img/banners/publicidad-productos.jpg" alt="banner categoria productos" />
                                        </Link>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="publicidad">
                                    <p className="texto">Mercados</p>
                                    <picture className="imagen">
                                        <Link to='/category/mercados'>
                                            <img src="/img/banners/publicidad-mercados.jpg" alt="banner categoria mercados" />
                                        </Link>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        )
}