import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Banner } from './components/Banner/Banner';
//rutas para react don
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar }           from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BannerInicio, BannerCategorias, BannerProducto} from './Helpers/itemsBanners';
import { Error404 } from './components/404/404';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/** Inicio **/}
          <Route path='/' element={
            <>
              <NavBar />
              <Banner data={BannerInicio}/>
              <ItemListContainer title="Productos Destacados" viewProduct="carousel" colElements="4" />
            </>
          }/>
          {/** Vista pagina de producto**/}
          <Route path='/productos/' element={
            <>
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
              
            </>
          }/>
          {/** Vista de cada categoria de productos**/}
          <Route path='/category/:id' element={
            <>
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
              
            </>
          }/>
          {/** Vista de cada producto **/}
          <Route path='/item/:id' element={
            <>
              <NavBar />
              <ItemDetailContainer viewProduct="list"/>
            </>
          }/>


          {/* Error 404*/}
          <Route path='*' element={
            <Error404 />
          }/>
        </Routes>
            
      </BrowserRouter>
    </div>
  );
}




export default App;
