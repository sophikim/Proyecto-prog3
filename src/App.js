import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import ContenedorPeliculasPop from './components/ContenedorPeliculasPop/ContenedorPeliculasPop';
import ContenedorSeries from './components/ContenedorSeries/ContenedorSeries';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <h2>PELICULAS POPULARES</h2>
        <ContenedorPeliculasPop/>
        <h2>SERIES</h2>
        <ContenedorSeries/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
