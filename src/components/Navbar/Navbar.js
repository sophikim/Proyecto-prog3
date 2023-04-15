import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar(){
return(
    <nav>
        <div>
        <ul className='nav'>
            <li className='logo'>
                <Link to='/'> <img src='./img/logo2.jpg' alt=''/></Link>
            </li> 
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li> 
                <Link to="/peliculas/favoritos">Favoritos</Link>
            </li>
            <li>
                <Link to='/TodasPelis'>Todas las peliculas</Link> 
            </li>
            <li>
                <Link to='/TodasSeries'>Todas las series</Link> 
            </li>
        </ul>
        </div>
        
    </nav>
)
}

export default Navbar;