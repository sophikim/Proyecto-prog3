import React, {Component} from 'react';
import Series from '../Series/Series';

class ContenedorSeries extends Component{
    constructor(props){
        super(props)
        this.state={
            series:[]
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=7f5386f01dbfdcd8cd1afd5b805e09fc')
        .then(res => res.json())
        .then(data => this.setState({
            series: data.results
        }))
        .catch(err => console.log('Esta en este error'))
    }
    render(){
        return(
            <>
                <div className='series-card'>
                    <img src={this.props} alt=''/>
                    {
                        this.state.series.map((unaSerie, idx) => <Series key={unaSerie.name + idx} datosSeries={unaSerie} />)
                    }
                </div>
            </>
        )
    }
}

export default ContenedorSeries