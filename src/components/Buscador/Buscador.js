import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state ={
            valorInput:'',
        }
    }


    evitarSubmit(event){
        event.preventDefault()
    }


    guardarValor(event){
        this.setState(
            {
                valorInput:event.target.value
            }
        );
    };

    render() {
        return (
            <>
                <form className='buscador' onSubmit={(event)=> this.evitarSubmit(event)}>
                <input className="buscador-input" type='text' placeholder='Buscar' onChange={(event) => this.guardarValor(event)} value={this.state.valorInput}/>
                {
                    this.state.valorInput ?
                    <Link to={`/resultados/${this.state.valorInput}`}>
                    <input className="buscador-submit"  type='submit' value='enviar'  />
                    </Link>
                    :
                    <input className="buscador-submit" type='submit' value='enviar' />
                }
                </form>
            </>
        
        )
    }
}

export default Buscador;