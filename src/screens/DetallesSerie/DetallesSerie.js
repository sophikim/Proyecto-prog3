
import React, { Component } from 'react'


//define el estado inicial del componente previo a la api

class DetalleSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      serie: '',
    }
  }

  //info de la api
  //`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c9533621e81789759a632a472c946937&language=en-US`

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/${this.state.tv_id}?api_key=c9533621e81789759a632a472c946937&language=en-US`)
      .then(resp => resp.json())
      .then(data => this.setState(
        { serie: data }
      ))
      .catch(e => console.log(e))
  }



  //renderiza los datos procesados de la api

  render() {
    //console.log(this.props.match.params.id)
    console.log(this.state.serie);
    return (
      <div>
        {
          this.state.serie === '' ?
            <h1>Cargando..</h1> :
            <div>
              <img src={`https://image.tmdb.org/t/p/w342/${this.state.serie.poster_path}`} />
              <h1>{this.state.serie.title}</h1>
              <p>{this.state.serie.overview}</p>
              <p>lanzamiento: {this.state.serie.air_date}</p>
              <p>duración: {this.state.serie.number_of_episodes} minutos</p>
              <p>calificación promedio: {this.state.serie.vote_average}</p>




            </div>
        }
      </div>

    )
  }
}

export default DetalleSerie;