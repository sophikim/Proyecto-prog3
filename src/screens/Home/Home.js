import React, { Component } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'
import Buscador from '../../components/Buscador/Buscador'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <>
        <main className='home'>
          <Buscador/>
          <h1 className='seccion'>Peliculas Más Populares</h1>
            <Link to='/peliculas/verTodas' className='verTodas'>Ver todas las Peliculas</Link>
            <ContenedorPeliculasPop/>
          <h1 className='seccion'>Series</h1>
            <Link to='/series/verTodas' className='verTodas'>Ver todas las Series</Link>
            <ContenedorSeries/>
        </main>
      </>
    )
  }
}

export default Home;