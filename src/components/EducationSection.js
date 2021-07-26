import React from 'react';

class EducationSection extends React.Component {
    render () {
        if (this.props.minors) {
            return (
                <div className='lowerSection'>
                    <h3>{this.props.school}</h3>
                    <h4 style={{display: 'inline-block'}}>{this.props.degree}</h4>
                    <h5 style={{display: 'inline-block', float: 'right'}}>{this.props.date}</h5>
                    <p className='minors'>{this.props.minors}</p>
                </div>
            )
        }
        else {
            return (
                <div className='lowerSection'>
                    <h3>{this.props.school}</h3>
                    <h4 style={{display: 'inline-block'}}>{this.props.degree}</h4>
                    <h5 style={{display: 'inline-block', float: 'right'}}>{this.props.date}</h5>
                </div>
            )
        }

    }
}

export default EducationSection