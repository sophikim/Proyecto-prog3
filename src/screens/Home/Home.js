import React, { Component } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'
import Buscador from '../../components/Buscador/Buscador'

class Home extends Component {
  render() {
    return (
      <>
        <main>
          <Buscador/>
          <h1 className='seccion'>Peliculas Más Populares</h1>
          <ContenedorPeliculasPop/>
          <h1 className='seccion'>Series</h1>
          <ContenedorSeries/>
        </main>
      </>
    )
  }
}

export default Home;