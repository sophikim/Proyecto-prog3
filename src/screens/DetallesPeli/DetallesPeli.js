import React, { Component } from 'react'


//define el estado inicial del componente previo a la api

class DetallePeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      peli: '',
    }
  }

  //info de la api
  //`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c9533621e81789759a632a472c946937&language=en-US`

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c9533621e81789759a632a472c946937&language=en-US`)
      .then(resp => resp.json())
      .then(data => this.setState(
        { peli: data }
      ))
      .catch(e => console.log(e))
  }
  


  //renderiza los datos procesados de la api

  render() {
    //console.log(this.props.match.params.id)
    console.log(this.state.peli);
    return (
      <div>
        {
          this.state.peli === '' ?
            <h1>Cargando..</h1> :
            <div>
              <img src={`https://image.tmdb.org/t/p/w342/${this.state.peli.poster_path}`} />
              <h1>{this.state.peli.title}</h1>
              <p>{this.state.peli.overview}</p>
              <p>lanzamiento: {this.state.peli.release_date}</p>
              <p>duración: {this.state.peli.runtime} minutos</p>
              <p>calificación promedio: {this.state.peli.vote_average}</p>
             

              

            </div>
        }
      </div>
      
    )
  }
}

export default DetallePeli;