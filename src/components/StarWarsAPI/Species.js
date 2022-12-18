import React from 'react'

class Species extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        return(
            <div>
                <h6>Name: {this.props.data.name}</h6>
                <h6>Classification: {this.props.data.classification}</h6>
                <h6>Designation: {this.props.data.designation}</h6>
                <h6>Average Height: {this.props.data.average_height}</h6>
                <h6>Average Lifespan: {this.props.data.average_lifespan}</h6>
                <h6>Language: {this.props.data.language}</h6>
            </div>     
        )
    }
}

export default Species
