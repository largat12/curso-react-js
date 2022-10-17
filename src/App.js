import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
//rutas para react don
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Banner } from './components/Banner/Banner';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar }           from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BannerInicio, BannerCategorias, BannerProducto, BannerCarritoCompras, BannerCheckout} from './Helpers/itemsBanners';
import { Error404 } from './components/404/404';
import { CartContextProvider } from './context/cartContext';
import { TitleComponent } from './title/Title';
import { CartView } from './components/CartView/CartView';
import { Footer } from './components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            {/** Inicio **/}
            <Route path='/' element={
              <>
                <TitleComponent title={"Inicio"} />
                <NavBar />
                <Banner data={BannerInicio}/>
                <ItemListContainer title="Productos Destacados" viewProduct="carousel" colElements="4" />
                <Footer />
              </>
            }/>
            {/** Vista pagina de producto**/}
            <Route path='/productos/' element={
              <>
                <TitleComponent title={"Productos"} />
                <NavBar />
                <div className='container'>
                  <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                    <Banner data={BannerProducto}/>
                    <ItemListContainer title="" viewProduct="list" colElements="3"/>
                    </div>
                  </div>
                </div>
                <Footer />
              </>
            }/>
            {/** Vista de cada categoria de productos**/}
            <Route path='/category/:id' element={
              <>
                <TitleComponent title={"Categoria"} />
                <NavBar />
                <div className='container'>
                  <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                    <Banner data={BannerCategorias}/>
                    <ItemListContainer title="" viewProduct="list" colElements="3"/>
                    </div>
                  </div>
                </div>
                <Footer />
              </>
            }/>
            {/** Vista de cada producto **/}
            <Route path='/item/:id' element={
              <>
                <TitleComponent title={"Producto"} />
                <NavBar />
                <ItemDetailContainer viewProduct="list"/>
                <Footer />
              </>
            }/>
            {/**  Vista de carrito**/}
            <Route path='/cart/' element={
              <>
                <TitleComponent title={"Carrito"} />
                <NavBar />
                <div className='container'>
                  <div className='row'>
                    <div className='col-12'>
                      <Banner data={BannerCarritoCompras}/>
                      <CartView />
                    </div>
                  </div>
                </div>  
                
                <Footer />
              </>
              
            } />
            {/**  Vista de checkout**/}
            <Route path='/checkout/' element={
              <>
                <TitleComponent title={"Detalls de la orden"} />
                <NavBar />
                <div className='container'>
                  <div className='row'>
                    <div className='col-12'>
                      <Banner data={BannerCheckout}/>
                    </div>
                  </div>
                </div>  
                
                <Footer />
              </>
              
            } />
            {/* Error 404*/}
            <Route path='*' element={
              <>
                <TitleComponent title={"Erro 404"} />
                <Error404 />
              </>

              
            }/>
          </Routes>
              
        </BrowserRouter>
      </CartContextProvider>
    </div>
    
  );
}




export default App;
