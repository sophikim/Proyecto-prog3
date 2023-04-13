import React, { Component } from 'react'
import ContenedorPeliculasPop from '../../components/ContenedorPeliculasPop/ContenedorPeliculasPop'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state= {
            favoritos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id => {
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${id}`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            )
            .then(data => this.setState({
                favoritos: data
            }))
            .catch(err => console.log(err))


        }
    }
    
  render() {
    return (
      <ContenedorPeliculasPop peliculas={this.state.favoritos}/>
    )
  }
}

export default Favoritos;