import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const opciones=[ 
    {
        nombre: 'Home',
        path: '/'
    },
    {
        nombre:'Favoritos',
        path:'/favoritos'
    },
    {
        nombre: 'Ver Todas',
        path:'/vertodas'
    },
    {
        nombre: 'Buscar por título',
        path:'/buscador'
    }
    
]

function Navbar(){
return(
    <nav>
        <ul className='logo'>
                <img src='./img/logo2.jpg' alt=''/>
        </ul>
        <ul className='main-nav'>
        {
                opciones.map((elm, idx) => <li>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>)
            }
        </ul>
    </nav>
)
}

export default Navbar;