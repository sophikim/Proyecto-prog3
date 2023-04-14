import React, {Component} from 'react';
import PeliculasPop from '../PeliculasPop/PeliculasPop';


class ContenedorPeliculasPop extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculasPop: []
        }
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7f5386f01dbfdcd8cd1afd5b805e09fc')
    .then(res => res.json())
    .then(data => this.setState({
        peliculasPop: data.results
    }))
    .catch(err => console.log('Esta en este error'))
}
render(){
    return(
        <section className='pelicula-card'>
            {
                    this.state.peliculasPop.map((unaPelicula, idx) => <PeliculasPop key={unaPelicula.name + idx} datosPeliculas={unaPelicula} />)

                   // this.state.peliculas.length <= 0 ?
                    //<h2>Trayendo peliculas...</h2> :
                    //this.state.peliculas.map(titulo => <article>
                     //   <PeliculasPop info={titulo} />
                   // </article>)<div className='pelicula-card'>
                   //<img src={this.props} alt=''/>
                }
           </section>
        )
    }
}

export default ContenedorPeliculasPop