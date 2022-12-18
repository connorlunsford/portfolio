import React from 'react';
import ExperienceSection from './ExperienceSection'

class Experience extends React.Component {
    render () {
        return (
            <div className="sectionDiv" id="Experience">
                <h2>EXPERIENCE</h2>
                <ExperienceSection 
                    title='SOFTWARE DEVELOPER IN THE ROTATION PROGRAM'
                    date='October 2021 - October 2022'
                    employer='DOCUSIGN'
                    desc="As a software developer in the rotation program at DocuSign, I worked very closely with two full-stack 
                    development teams for 6 months each. The first rotation was with the Developer Content team and primarily 
                    focused on creating an internal tool using Next.js that used the Google API and Jira API to create templates 
                    for large batches of Jira tickets. Additionally I wrote code examples in 8 different programming languages and 
                    several blog posts. The next rotation was with the Click team working on the Elastic Signing product. I personally 
                    worked on several features, one of which attracted a two million dollar contract. Additionally, I worked on our testing 
                    using Jest/XState and increased our line coverage in one repository from 68% to 80% and another repository from under 5% to 
                    25%."
                />
                <ExperienceSection 
                    title='CONTRACT SOFTWARE DEVELOPMENT ENGINEER I'
                    date='March 2021 - July 2021'
                    employer='XEVO'
                    desc="I spent a 5 month contract as a Software Development Engineer I at Xevo in Bellevue, WA. 
                    While assisting the DevOps team I primarily created automation tools to be used in Xevo's development pipelines. I worked 
                    very closely with python, ansible, terraform, and many AWS resources. I also assisted the mobile team where my primary task was creating 
                    automation tests using JUnit and Mockito. In doing this I work closely with the android sdk using java."
                />
                <ExperienceSection 
                    title='SHIPPING & IT MANAGER'
                    date='June 2019 - June 2021'
                    employer='LUNDE MARINE ELECTRONICS'
                    desc='I worked part time as a Shipping & IT Manager at a small family Marine Electronics company 
                    in Seattle, WA. My primary tasks include coordinating inventory input and output, managing the 
                    server and network for the building, and providing technical support for coworkers. My secondary 
                    tasks are mainly focused around designing projects to increase company efficiency and customer relations.'
                />
            </div>
        )
    }
}

export default Experience