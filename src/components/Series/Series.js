import React, {Component} from 'react';

class Series extends Component{
    constructor(props){
        super(props)
        this.state={
            esFavorito: false,
            texto:'Ver mas',
            clase:'hidden'
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

    sacarFav(id){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
        let filtro = storageAArray.filter((elm)=> elm !== id)
        let filtroAString = JSON.stringify(filtro)
        localStorage.setItem('favoritos', filtroAString)
    
        this.setState({
          esFavorito: false
        })
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
         <div
             className="texto">
                <img src={this.props.url} alt="" />
                <h4>{this.props.nombre}</h4>
                <p
                className={this.state.clase}
                >{this.props.descripcion}</p>
                
            </div>
            <div>
            {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarFav(this.props.info.id)}> Sacar de Favoritos</button>
              :
              <button onClic={()=>this.anhadirFav(this.props.info.id)}> Añadir a Favoritos</button>
            } 
             <button
                onClick={()=> this.cambiarTexto()}
                >{this.state.texto}</button>
            </div>
        </>
        /*<div>
            { this.state.titulo === '' ?
                <h2>Trayendo peliculas...</h2> :
                <h2>{this.state.titulo}</h2>
    }
        </div>*/
    )
}
}

export default Series