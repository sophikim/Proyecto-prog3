import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Navbar(){
return(
    <nav>
        <div>
        <ul className='logo'>
                <Link to='/'>
                    <img src='./img/logo2.jpg' alt=''/>
                </Link>
                
        </ul>
        <ul className='main-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favoritos'>Favoritos</Link></li>
            <li><Link to='/verTodas'>Ver Todas</Link> </li>
        </ul>
        </div>
        
    </nav>
)
}

export default Navbar;