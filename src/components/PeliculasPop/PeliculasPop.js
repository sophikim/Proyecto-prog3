import React from 'react';
import { Link } from 'react-router-dom'

export default function PeliculasPop(props) {
  return (
        <div>
            <img src={props.info.image}/>
            <h1>{props.info.titulo}</h1>
        </div>
    
  )
}


