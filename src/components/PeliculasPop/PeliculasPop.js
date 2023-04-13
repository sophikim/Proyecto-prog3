import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class PeliculasPop extends Component {
    constructor(props){
        super(props)
        this.state = {
            esFavorito: false
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

    render(){
        return(
            <div>
            <Link to={`/unapelicula/id/${this.props.info.id}`}>
              <img src={this.props.info.poster_path} alt="nn"/>
              <h1>{this.props.info.original_title}</h1>
            </Link>
            {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarFav(this.props.info.id)}> Sacar de Favs</button>
              :
              <button onClic={()=>this.anhadirFav(this.props.info.id)}> Añadir a Favs</button>
            } 
            </div>
        )
    }
}


export default PeliculasPop
