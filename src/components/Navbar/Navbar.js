import React from 'react';
import './styles.css';

const opciones=['Home', 'Favoritos ',  'Ver Todas']

function Navbar(){
return(
    <nav>
        <ul className='logo'>
                <img src='./img/logo2.jpg' alt=''/>
        </ul>
        <ul className='main-nav'>
           {opciones.map((opcion, idx)=>
           <li key={opcion + idx}>
               {opcion}
           </li>)}
        </ul>
    </nav>
)
}

export default Navbar;