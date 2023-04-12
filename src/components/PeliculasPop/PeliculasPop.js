import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class PeliculasPop extends Component {
    constructor(props){
        super(props)
    }

    anhadirFav(id){
        let storage = localStorage.getItem('favoritos')
        
    }

    render(){
        return(
            <div>
            <Link to={`/unpersonaje/id/${this.props.info.id}`}>
              <img src={this.props.info.poster_path}/>
              <h1>{this.props.info.original_title}</h1>
            </Link>
            <button onClic={()=>this.anhadirFav(this.props.info.id)}> Añadir a Favs</button>
            </div>
        )
    }
}


export default PeliculasPop
