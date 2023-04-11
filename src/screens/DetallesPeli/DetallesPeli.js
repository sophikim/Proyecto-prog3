import React, {Component} from 'react'


//define el estado inicial del componente previo a la api

export default class DetallePeli extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            peli:''
        }
    }

    //https://api.themoviedb.org/3/movie/{this.state.id}?api_key=c9533621e81789759a632a472c946937&language=en-US


//info de la api

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c9533621e81789759a632a472c946937&language=en-US`)
        .then(resp => resp.json())
        .then(data => this.setState({
            peli:data
        }))
    }


//renderiza los datos procesados de la api

  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        {
        this.state.peli === '' ?
        <h1>Cargando..</h1> :
        <div>
            <img src={this.state.peli.logo_path} />
            <h1>{this.state.peli.name}</h1>
            <p>{this.state.peli.overview}</p>
            <p>{this.state.peli.release_date}</p>
            <p>{this.state.peli.runtime}</p>
            <p>{this.state.peli.vote_average}</p>
            <p>{this.state.peli.genres}</p>
            
        </div>
        }
      </div>
    )
  }
}
