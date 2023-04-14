import React,{Component} from 'react';
import Buscador from '../../components/Buscador/Buscador';
import ResultadosBuscador from '../../components/ResultadosBuscador/ResultadosBuscador';

class PagBuscador extends Component{
    constructor(props){
        super(props);
        this.state={
            peliculas: [],
            resultadoBusqueda: this.props.match.params.title,
            loading:true,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=7f5386f01dbfdcd8cd1afd5b805e09fc&language=en-US&query=${this.state.palabraEncontrada}&page=1&include_adult=true`)
        .then(response=>response.json())
        .then(data=> this.setState({
            peliculas: data.results,
            loading: false
        }))
        .catch(error=>console.log(error))
    }
    evitarSubmit(event){
            event.preventDefault()
        console.log('Se evito el Submit')
    }
 
    render(){
        return(
            <>
            <div>      
        <Buscador/>
        <h1>Estos son los Resultados</h1>
        <section>
            {
                this.state.peliculas.length !== 0 ?
                    this.state.peliculas.map((unaPelicula, idx) => <ResultadosBuscador key={unaPelicula.title + idx} datosResultados={unaPelicula}/>)
                    :
                    <h1>No se encontró nada</h1>}
        </section>

            </div>
            </>
        )
    }
}

export default PagBuscador;
