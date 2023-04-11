import React, {Component} from 'react'

class Series extends Component{
    constructor(props){
        super(props)
        this.state={
            titulo:[],
            descripcion:''
        }
    }

componentDidMount(){
        // fetch('https://api.themoviedb.org/3/movie/550?api_key=7f5386f01dbfdcd8cd1afd5b805e09fc')
        // .then(res => res.json())
        // .then(data => this.setState({
        //     titulo: data.results
        // })
        // .catch(err => console.log(err))
    // )
}

render(){
    return(
        <div>
            { this.state.titulo === '' ?
                <h2>Trayendo peliculas...</h2> :
                <h2>{this.state.titulo}</h2>
    }
        </div>
    )
}
}




export default Series