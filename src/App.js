import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Banner } from './components/Banner/Banner';


import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar }           from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ItemListContainer title="Vuelos baratos en Colombia" description="Planea tus vacaciones con las mejores ofertas de vuelos baratos a Colombia. Recorre el país de extremo a extremo con vuelos baratos."/>
    </div>
  );
}




export default App;
