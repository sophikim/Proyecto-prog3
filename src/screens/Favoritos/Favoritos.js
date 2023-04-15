import { series } from 'async'
import React, { Component, Card } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'
import ContenedorSeries from '../../components/ContenedorSeries/ContenedorSeries'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state= {
            favoritos: []
        }
    }

    componentDidMount(){
        let favorito = [];
        let Storage = localStorage.getItem('favoritos')
        
        if(storage !== null){
            favorito = SON.parse(Storage) /
            
            favorito.forEach(idFavorito => {
                fetch('https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=7f5386f01dbfdcd8cd1afd5b805e09fc')
                .then(res => res.json())
                .then(data => this.setState({ favoritos: this.state.favoritos.concat(data) }))
                .catch(e => console.log(e))
            }
            )
        }
    }
    
render(){
    return(
        <>
        <h2 className='favoritas'>Mis favoritas</h2>
        <section className='contenedor'>
            {
                this.state.favoritas.map( (unPelicula, idx) => <Card key={unPelicula.original_title+idx} datosPelicula={unPelicula}/>)
            }
        </section>
        </>
    )
}
}

export default Favoritos;