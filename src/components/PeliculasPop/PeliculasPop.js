import React, {Component} from 'react';
import ContenedorPeliculasPop from '../ContenedorPeliculasPop/ContenedorPeliculasPop';

const peliculas=[
    {
        url:'./img/ahsoka.jpg',
        nombre:'Ahsoka',
        descripcion: 'Heroe copado'
    },
    {
        url:'./img/anakin.jpg',
        nombre:'Anakin',
        descripcion: 'Heroe copado'
    },
    {
        url:'./img/batman.jpg',
        nombre:'Batman',
        descripcion: 'Heroe copado'
    },
    {
        url:'./img/ahsoka.jpg',
        nombre:'Ahsoka',
        descripcion: 'Heroe copado'
    },
]

class PeliculasPop extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor:1
        }
    }

    render(){
        return(
            <div className="peliculas">
                {
                    peliculas.map((pelicula, idx)=> 
                    <ContenedorPeliculasPop
                        url={pelicula.url}
                        nombre={pelicula.nombre}
                        descripcion={pelicula.descripcion}
                        key={pelicula.nombre + idx}
                    />)
                }
               
            </div>
        )
    }
}
           
               //* <article className='pelicula-card'>
            //*         <div>
         //*
            //*             <p>{props.original_title}</p>
               //*          <p>{props.descripcion}</p>
                    
                  //*       <button>Ver mas</button>
                     //*    <button>Ir a detalle</button>
                        //* <button>Agregar a favoritos</button>
                     //*</div>
              //*   </article>

            



export default PeliculasPop

