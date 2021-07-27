import React from 'react';

class EducationSection extends React.Component {
    render () {
        if (this.props.minors) {
            return (
                <div className='lowerSection'>
                    <h3 className='educationHeading'>{this.props.school}</h3>
                    <h4 style={{display: 'inline-block'}} className='educationHeading'>{this.props.degree}</h4>
                    <h5 className='projectDate'>{this.props.date}</h5>
                    <p className='minors'>{this.props.minors}</p>
                </div>
            )
        }
        else {
            return (
                <div className='lowerSection'>
                    <h3 className='educationHeading'>{this.props.school}</h3>
                    <h4 style={{display: 'inline-block'}} className='educationHeading'>{this.props.degree}</h4>
                    <h5 className='projectDate'>{this.props.date}</h5>
                </div>
            )
        }

    }
}

export default EducationSection