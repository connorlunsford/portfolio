import React from 'react';
import ExperienceSection from './ExperienceSection'

class Experience extends React.Component {
    render () {
        return (
            <div className="sectionDiv" id="Experience">
                <h2>EXPERIENCE</h2>
                <ExperienceSection 
                    title='SHIPPING & IT MANAGER'
                    date='June 2019 - June 2021'
                    employer='LUNDE MARINE ELECTRONICS'
                    desc='I worked part time as a Shipping & IT Manager at a small family Marine Electronics company 
                    in Seattle, WA. My primary tasks include coordinating inventory input and output, managing the 
                    server and network for the building, and providing technical support for coworkers. My secondary 
                    tasks are mainly focused around designing projects to increase company efficiency and customer relations.'
                />
                <ExperienceSection 
                    title='DEVOPS & MOBILE DEVELOPMENT INTERN'
                    date='March 2021 - July 2021'
                    employer='XEVO INC'
                    desc="I spent a 5 month internship as a DevOps and Mobile Software Developer Intern at Xevo in Bellevue, WA. 
                    As a DevOps Intern I primarily created automation tools to be used in Xevo's development pipelines. I worked 
                    very closely with python, ansible, and many AWS resources. As a Mobile Dev Intern my primary task was creating 
                    automation tests using JUnit and Mockito. In doing this I work closely with the android sdk using java."
                />
            </div>
        )
    }
}

export default Experience