import React, { Component } from 'react'
//import Cards from '../../componentes/Cards/Cards';

class TodasPelisPop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrarMas: false,
            texto: 'Mostrar Mas',
            topmovies: [],
            /*ready : false*/
            datosFiltrados: [],

        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top?api_key=8f700484f7a536b79e4de455e52eb11a')
            .then(response => response.json())
            .then(data => this.setState({
                topmovies: data.results,
                //ready : true

            }, console.log('top movies', data.results)))
            .catch(error => console.log(error));


    }

    masInfo() {
        if (this.state.verMas) {
            this.setState({
                mostrarMas: false,
                texto: 'Mostrar más'
            })
        } else {
            this.setState({
                mostrarMas: true,
                texto: 'Mostrar menos'
            })
        }
    }



    render() {
        return (
            <main>
                <React.Fragment>
                    <h2 className='h2'> Todas las peliculas top</h2>
                    <section className='peliculas'>
                        <>
                            {this.state.topmovies === '' ?
                                <div class="lds-ellipsis"></div>
                                :
                                <Cards info={this.state.topmovies} />}
                        </>
                    </section>
                </React.Fragment>
            </main>


        )
    }




}


export default TodasPelisTop
