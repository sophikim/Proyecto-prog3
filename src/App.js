import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import ContenedorPeliculasPop from './components/ContenedorPeliculasPop/ContenedorPeliculasPop';
import ContenedorSeries from './components/ContenedorSeries/ContenedorSeries';
import Buscador from './screens/Buscador/Buscador';

//import DetallesPeli from './screens/DetallesPeli/DetallesPeli';
//import DetallesSerie from './screens/DetallesSerie/DetallesSerie';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/buscador' exact={true} component={Buscador}/>
        <main>
          <h2>PELICULAS POPULARES</h2>
          <ContenedorPeliculasPop/>
          <h2>SERIES</h2>
          <ContenedorSeries/>
        </main>
        </Switch>
      <Footer/>

    </>
  );
}

export default App;
