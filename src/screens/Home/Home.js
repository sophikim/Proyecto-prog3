import React, { Component } from 'react'
//import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'
import PeliculasPop from '../../components/PeliculasPop/PeliculasPop'

class Home extends Component {
  render() {
    return (
      <>
        <main>
          <h1>Peliculas Populares</h1>
          <PeliculasPop />
          <h1>Series</h1>
          <ContenedorSeries/>
        </main>
      </>
    )
  }
}

export default Home