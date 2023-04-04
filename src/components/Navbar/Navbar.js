import React from 'react';
import './styles.css';

function Navbar(){
return(
    <nav>
        <ul className='logo'>
                <img src='./img/logo2.jpg' alt=''/>
        </ul>
        <ul className='main-nav'>
            <li>Home</li>
            <li>Favoritos</li>
            <li>Ver Todas</li>
        </ul>
    </nav>
)
}

export default Navbar;