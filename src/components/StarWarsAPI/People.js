import React from 'react'

class People extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        return(
            <div>
                <h6>Name: {this.props.data.name}</h6>
                <h6>Gender {this.props.data.gender}</h6>
                <h6>Birth Year: {this.props.data.birth_year}</h6>
                <h6>Eye Color: {this.props.data.eye_color}</h6>
                <h6>Hair Color: {this.props.data.hair_color}</h6>
                <h6>Height: {this.props.data.height}</h6>
                <h6>Mass: {this.props.data.mass}</h6>
            </div>
        )
    }
}

export default People
