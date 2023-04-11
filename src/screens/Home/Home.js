import React, { Component } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'

class Home extends Component {
  render() {
    return (
      <>
        <main>
          <h1>Peliculas Populares</h1>
          <ContenedorPeliculasPop />
          <h1>Series</h1>
          <ContenedorSeries/>
        </main>
      </>
    )
  }
}

export default Home