import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './PeliculasPop.css'

class PeliculasPop extends Component {
    constructor(props){
        super(props)
        this.state = {
            esFavorito: false,
            texto:'Ver mas',
            clase:'hidden'
          }
    }


    anhadirFav(id){
        let storage = localStorage.getItem('favoritos')

        if(storage === null){
            let idEnArray = [id]
            let arrayAString = JSON.stringify(idEnArray)
            localStorage.setItem('favoritos', arrayAString)
      
          } else {
            let deStringAArray = JSON.parse(storage) 
            deStringAArray.push(id)
            let arrayAString = JSON.stringify(deStringAArray)
            localStorage.setItem('favoritos', arrayAString)
          }
      
          this.setState({
            esFavorito: true
          })   
    }

  sacarFav(id){
    let storage = localStorage.getItem('favoritos')
    let storageAArray = JSON.parse(storage)
    let filtro = storageAArray.filter((elm)=> elm !== id)
    let filtroAString = JSON.stringify(filtro)
    localStorage.setItem('favoritos', filtroAString)

    this.setState({
      esFavorito: false
    })
  }

  cambiarTexto(){
    if(this.state.texto === 'Ver mas'){
        this.setState({
            texto: 'Ver menos',
            clase: 'show'
        })
    } else {
        this.setState({
            texto: 'Ver mas',
            clase:'hidden'
        })
    }
}

    render(){
        return(   
              <>

            <article className='peliculas-card'>
              <div className='card-pelicula'>
                  <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosPeliculas.poster_path}`} alt="" />
              </div>

              <div>
                <h2 className='titulo'>{this.props.datosPeliculas.original_title}</h2>
                <p className={this.state.clase}>{this.props.datosPeliculas.overview}</p>
              </div>

            <div>
            {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarFav(this.props.datosPeliculas.id)}> Sacar de Favoritos</button>
              :
              <button onClick={()=>this.anhadirFav(this.props.datosPeliculas.id)}> Añadir a Favoritos</button>
            } 
              <button onClick={()=> this.cambiarTexto()}>{this.state.texto}</button>
                
            </div>

            <div className='button'>
                  <Link to={`/detallespeli/id/${this.props.datosPeliculas.id}`}>
                      <button>Ir a detalle</button>
                  </Link>

                   
              </div>
            </article>

            </>
        )
    }
}

export default PeliculasPop;
