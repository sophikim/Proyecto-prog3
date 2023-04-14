import React, { Component } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'
import Buscador from '../../components/Buscador/Buscador'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <main>
          <Buscador/>
          <h1 className='seccion'>Peliculas Más Populares</h1>
            <Link to='/peliculas/verTodas'>Ver Todas</Link>
            <ContenedorPeliculasPop/>
          <h1 className='seccion'>Series</h1>
            <Link to='/series/verTodas'>Ver Todas</Link>
            <ContenedorSeries/>
        </main>
      </>
    )
  }
}

export default Home;