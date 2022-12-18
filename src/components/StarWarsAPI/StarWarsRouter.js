import React from 'react'
import People from './People'
import Planets from './Planets'
import Starships from './Starships'
import Films from './Films'
import Vehicles from './Vehicles'
import Species from './Species'

class StarWarsRouter extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        if (this.props.target === "people") {return <People data={this.props.data}/>}
        else if (this.props.target === "planets") {return <Planets data={this.props.data}/>}
        else if (this.props.target === "starships") {return <Starships data={this.props.data}/>}
        else if (this.props.target === "films") {return <Films data={this.props.data}/>}
        else if (this.props.target === "vehicles") {return <Vehicles data={this.props.data}/>}
        else if (this.props.target === "species") {return <Species data={this.props.data}/>}
        else {return (<div/>)}
    }
}

export default StarWarsRouter
