import React from 'react';
import ImageSection from './General/ImageSection';

class ProjectSection extends React.Component {
    render () {
        return (
            <div className='lowerSection'>
                <h3 style={{display: 'inline-block'}} class='projectHeading'>{this.props.title}</h3>
                <a href={this.props.link} class='projectHeading'>
                    <img 
                        className="githubLink" 
                        src='https://github.com/connorlunsford/portfolio/blob/master/public/github-logo.png?raw=true' 
                        alt='github' 
                    />
                </a>
                <br/>
                <h4 style={{display: 'inline-block'}} class='projectHeading'>{this.props.type}</h4>
                <h5 class='projectDate'>{this.props.date}</h5>
                <p>{this.props.desc}</p>
                <ImageSection images={this.props.images} />
            </div>
        )
    }
}

export default ProjectSection