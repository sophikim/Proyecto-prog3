import React,{Component} from 'react';

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            peliculas: [],
            backup:[]
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.inputValue}&api_key=7f5386f01dbfdcd8cd1afd5b805e09fc`)
        .then(response=>response.json())
        .then(data=> this.setState({
            peliculas: data.results,
            backup:data.results
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
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <button>Enviar</button>
            </form>
            <div>
                {this.state.peliculas===''?
                <h3>Cargando</h3>:
                <h3>{this.state.peliculas} </h3>}
                <p>BUSCADOR</p>
            </div>
            </>
        )
    }
}

export default Buscador;