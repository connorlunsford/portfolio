import React from 'react'

class Films extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        return (
            <div>
                <h6>Title: {this.props.data.title}</h6>
                <h6>Release Date: {this.props.data.release_date}</h6>
                <h6>Director: {this.props.data.director}</h6>
                <h6>Producer: {this.props.data.producer}</h6>
                <h6>Episode ID: {this.props.data.episode_id}</h6>
                <h6>Opening Crawl: {this.props.data.opening_crawl}</h6>
            </div>
        )
    }
}

export default Films
