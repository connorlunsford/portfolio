import React from 'react';

class ProjectSection extends React.Component {
    render () {
        return (
            <div className='lowerSection'>
                <h3 style={{display: 'inline-block'}}>{this.props.title}</h3>
                <a href={this.props.link}>
                    <img 
                        className="githubLink" 
                        src='./public/github-logo.png' 
                        alt='github' 
                        style={{display: 'inline-block', float: 'right'}}
                    />
                </a>
                <br/>
                <h4 style={{display: 'inline-block'}}>{this.props.type}</h4>
                <h5 style={{display: 'inline-block', float: 'right'}}>{this.props.date}</h5>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default ProjectSection