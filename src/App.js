import React from 'react';
import {Route, Switch} from 'react-router-dom'
//import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
//import ContenedorPeliculasPop from './components/ContenedorPeliculasPop/ContenedorPeliculasPop';
//import ContenedorSeries from './components/ContenedorSeries/ContenedorSeries';
import Home from './screens/Home/Home'
import PagBuscador from './screens/PagBuscador/PagBuscador';
//import NotFound from './components/NotFound/NotFound';
import NotFound from './screens/NotFound/NotFound';
import DetallePeli from './screens/DetallesPeli/DetallesPeli';
import DetalleSerie from './screens/DetallesSerie/DetallesSerie';

//import PeliculasPop from './components/PeliculasPop/PeliculasPop';

function App() {
  return (
    <>
      
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/pagbuscador' exact={true} component={PagBuscador}/>
          <Route path='/detallespeli/id/:id' component={DetallePeli}/>
          <Route path='/detallesserie/id/:tv_id' component={DetalleSerie}/>
          <Route path=''component={NotFound}/>
         

        </Switch>
      <Footer/>
    </>
  );
}

export default App;
