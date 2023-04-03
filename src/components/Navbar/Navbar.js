import React from 'react';

function Navbar(){
return(
    <nav>
        <ul className='logo'>
            <li>
                <img src='./img/logo2.jpg' alt=''/>
            </li>
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