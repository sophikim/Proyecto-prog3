import React, {Component} from 'react';

class ContenedorPeliculasPop extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas: [],
            texto:'Ver mas',
            clase:'hidden'
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

/*componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7f5386f01dbfdcd8cd1afd5b805e09fc')
    .then(res => res.json())
    .then(data => this.setState({
        peliculas: data.results
    }))
    .catch(err => console.log('Esta en este error'))
}*/

render(){
    return(
        <div
             className="character-card">
                <img src={this.props.url} alt="" />
                <h4>{this.props.nombre}</h4>
                <p
                className={this.state.clase}
                >{this.props.descripcion}</p>
                <button
                onClick={()=> this.cambiarTexto()}
                >{this.state.texto}</button>
            </div>
    )
}

/*
render(){
    return(
        <div>
            <img src={this.props}/>
                {
                    this.state.peliculas.length <= 0 ?
                    <h2>Trayendo peliculas...</h2> :
                    this.state.peliculas.map(titulo => <article>
                        {titulo.original_title}
                        <br></br>
                        {titulo.poster_path}
                    </article>)
                }
         
        </div>
        
    )
}*/
}

export default ContenedorPeliculasPop;