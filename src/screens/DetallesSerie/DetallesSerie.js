import React, {Component} from 'react'


//componente previo a la info de la api

export default class DetalleSerie extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            serie:''
        }
    }

//nuevo estado del componente donde vamos a traer la info de tmdb

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=c9533621e81789759a632a472c946937&language=en-US`)
        .then(resp => resp.json())
        .then(data => this.setState({
            serie:data
        }))
    }

//renderea la info

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        {
        this.state.serie === '' ?
        <h1>Cargando..</h1> :
        <div>
            <img src={this.state.serie.poster_path} alt=''/>
            <h1>{this.state.serie.name}</h1>
            <p>{this.state.serie.overview}</p>
            <p>{this.state.serie.air_date}</p>
            <p>{this.state.serie.number_of_episodes}</p>
            <p>{this.state.serie.vote_average}</p>
            <p>{this.state.serie.genres}</p>
            
        </div>
        }
      </div>
    )
  }
}
