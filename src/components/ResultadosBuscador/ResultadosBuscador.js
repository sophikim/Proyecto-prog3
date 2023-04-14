import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ResultadosBuscador extends Component {
    constructor(props){
    super(props)
    this.state={
        texto:'Ver mas',
        clase:'hidden',
    }
}

    cambiarTexto(){
        if(this.state.texto === 'hidden'){
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
            <article>
                <figure className="pelis">
                    <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosResultados.poster_path}`} alt="" />
                </figure>
                <h2>{this.props.datosResultados.title}</h2>
                <div>
                    <p onClick={()=> this.cambiarTexto()} className='descripcion'> {this.state.texto}</p>  
                    <p className={this.state.clase}>{this.props.datosResultados.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datosResultados.id}`}></Link>
                </div>
                <div>
                    <Link to={`/peliculas//detalle/id/${this.props.datosResultados.id}`}>
                    <button>Ir al detalle</button></Link>
                </div>

            </article>
                
            </>
        )
    }
}

export default ResultadosBuscador;