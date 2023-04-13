import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
//import ContenedorPeliculasPop from './components/ContenedorPeliculasPop/ContenedorPeliculasPop';
//import ContenedorSeries from './components/ContenedorSeries/ContenedorSeries';
import Home from './screens/Home/Home'
import PagBuscador from './screens/PagBuscador/PagBuscador';

//import DetallesPeli from './screens/DetallesPeli/DetallesPeli';
//import DetallesSerie from './screens/DetallesSerie/DetallesSerie';

//import PeliculasPop from './components/PeliculasPop/PeliculasPop';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/pagbuscador' exact={true} component={PagBuscador}/>

        </Switch>
      <Footer/>
    </>
  );
}

export default App;
