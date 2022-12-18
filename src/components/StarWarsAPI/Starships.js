import React from 'react'

class Starships extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        return(
            <div>
                <h6>Name: {this.props.data.name}</h6>
                <h6>Model: {this.props.data.model}</h6>
                <h6>Manufacturer: {this.props.data.manufacturer}</h6>
                <h6>MGLT: {this.props.data.mglt}</h6>
                <h6>Length: {this.props.data.length}</h6>
                <h6>Cargo Capactity: {this.props.data.cargo_capacity}</h6>
                <h6>Crew: {this.props.data.crew}</h6>
                <h6>Passengers: {this.props.data.passengers}</h6>
            </div>
        )
    }
}

export default Starships
