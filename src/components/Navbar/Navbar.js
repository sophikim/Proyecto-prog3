import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Navbar(){
return(
    <nav>
        <div>
        <ul className='logo'>
            <li>
                <Link to='/'> <img src='./img/logo2.jpg' alt=''/></Link>
            </li> 
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li> 
                <Link to="/peliculas/favoritos">Favoritos</Link>
            </li>
            <li>
                <Link to='/peliculas/verTodas'>Ver Todas</Link> 
            </li>
        </ul>
        </div>
        
    </nav>
)
}

export default Navbar;