import React from 'react';

class ExperienceSection extends React.Component {
    render () {
        return (
            <div className='lowerSection'>
                <h3>{this.props.title}</h3>
                <h4 style={{display: 'inline-block'}}>{this.props.employer}</h4>
                <h5 style={{display: 'inline-block', float: 'right'}}>{this.props.date}</h5>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default ExperienceSection