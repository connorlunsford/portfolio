import React from 'react'
import StarWarsRouter from './StarWarsRouter'

class StarWarsDiv extends React.Component {
    constructor () {
        super()
        this.state = {
            data: {},
            target: 'pick one',
            id: 0,
            loading: false,
            type: 'pick one'
        }
        this.loadData = this.loadData.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    loadData() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/" + this.state.target + "/" + String(this.state.id))
        .then(response => response.json())
        .then(data => {
            this.setState({data: data, loading: false, type: this.state.target})
        })
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        this.setState({[name]: value})
    }

    render() {
        if (this.state.loading) {
            return (<div><h4>LOADING...</h4></div>)
        }
        else {
            return(
                <div>
                    <h4>Star Wars Data</h4>
                    <p style={{margin: 0}}>
                        This app pulls from the star wars API in order to populate the text below with 
                        the information you want. This small project demonstrates my ability to work with 
                        forms, api calls, and conditional rendering. Simply enter any ID number into the 
                        form below and the API will return the corresponding Star Wars facts.
                    </p>
                    <form>
                        <select onChange={this.handleChange} name="target" value={this.state.target}>
                            <option value='pick one'>Pick One</option>
                            <option value='people'>People</option>
                            <option value='planets'>Planets</option>
                            <option value='starships'>Ships</option>
                            <option value='films'>Films</option>
                            <option value='vehicles'>Vehicles</option>
                            <option value='species'>Species</option>
                        </select>
                        <input type='number' placeholder='ID NUMBER' onChange={this.handleChange} name="id"></input>
                    </form>
                    <button onClick={this.loadData}>Submit</button>
                    <StarWarsRouter data={this.state.data} target={this.state.type} />
                </div>
            )
        }
    }
}

export default StarWarsDiv
