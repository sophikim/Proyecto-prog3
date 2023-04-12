import React from 'react';

function PeliculasPop(props){
    return(
       <article className='pelicula-card'>
            <div>
                <p>{props.original_title}</p>
                <p>{props.descripcion}</p>
            </div>
            <div>
                <button>Ver mas</button>
                <button>Ir a detalle</button>
                <button>Agregar a favoritos</button>
            </div>
        </article>
    )
}

export default PeliculasPop

