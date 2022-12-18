import React from 'react'

class Planets extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        return(
            <div>
                <h6>Name: {this.props.data.name}</h6>
                <h6>Climate: {this.props.data.climate}</h6>
                <h6>Terrain: {this.props.data.terrain}</h6>
                <h6>Population: {this.props.data.population}</h6>
                <h6>Diameter: {this.props.data.diameter}</h6>
                <h6>Gravity: {this.props.data.gravity}</h6>
            </div>
        )
    }
}

export default Planets
