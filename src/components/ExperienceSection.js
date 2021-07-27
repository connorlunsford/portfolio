import React from 'react';

class ExperienceSection extends React.Component {
    render () {
        return (
            <div className='lowerSection'>
                <h3 class='experienceHeading'>{this.props.title}</h3>
                <h4 style={{display: 'inline-block'}} class='experienceHeading'>{this.props.employer}</h4>
                <h5 class='projectDate'>{this.props.date}</h5>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default ExperienceSection