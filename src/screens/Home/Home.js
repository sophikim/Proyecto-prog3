import React, { Component } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'
//import PeliculasPop from '../../components/PeliculasPop/PeliculasPop'

class Home extends Component {
  render() {
    return (
      <>
        <main>
          <h1 className='seccion'>Peliculas Más Populares</h1>

          <ContenedorPeliculasPop/>
          <h1 className='seccion'>Series</h1>
          <ContenedorSeries/>
 
        </main>
      </>
    )
  }
}

export default Home