import React, {Component} from 'react';

class ResultadosBuscador extends Component {
    constructor(props){
    super(props)
    this.state={
        texto:'Ver mas',
        clase:'hidden',
    }
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
                <div className="pelis">
                    <h2>{this.props.datosResultados.title}</h2>
                    <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosResultados.poster_path}`} alt="" />
                    <p className={this.state.clase}>{this.props.datosResultados.overview}</p>
                </div>

                <div>
                {
                this.state.esFavorito ?
                <button onClick={()=> this.sacarFav(this.props.info.id)}> Sacar de Favoritos</button>
                :
                <button onClick={()=>this.anhadirFav(this.props.info.id)}> Añadir a Favoritos</button>
                } 
                <button onClick={()=> this.cambiarTexto()}>{this.state.texto}</button>
                    
                </div>
            </>
        )
    }
}

export default ResultadosBuscador;