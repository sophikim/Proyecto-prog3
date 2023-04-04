import React from 'react'

function Series(props){
    return(
        <article className='serie-card'>
            <div>
                <p>FOTO</p>
                <p>{props.titulo}</p>
                <p>{props.descripcion}</p>
                <button>Ver mas</button>
                <button>Ir a detalle</button>
                <button>Agregar a favoritos</button>
            </div>
        </article>
    )
}


export default Series