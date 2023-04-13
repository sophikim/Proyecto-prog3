import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
//import ContenedorPeliculasPop from './components/ContenedorPeliculasPop/ContenedorPeliculasPop';
//import ContenedorSeries from './components/ContenedorSeries/ContenedorSeries';
import Buscador from './screens/Buscador/Buscador';

//import DetallesPeli from './screens/DetallesPeli/DetallesPeli';
//import DetallesSerie from './screens/DetallesSerie/DetallesSerie';
import {Route, Switch} from 'react-router-dom'
import Home from './screens/Home/Home'
//import PeliculasPop from './components/PeliculasPop/PeliculasPop';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/buscador' exact={true} component={Buscador}/>
          <Route path='/' exact={true} component={Home}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
