import React from 'react';
import ExperienceSection from './ExperienceSection'

class Experience extends React.Component {
    render () {
        return (
            <div className="sectionDiv" id="Experience">
                <h2>EXPERIENCE</h2>
                <ExperienceSection 
                    title='SOFTWARE DEVELOPER IN DOCUSIGN ROTATION PROGRAM'
                    date='October 2021 - October 2022'
                    employer='DOCUSIGN'
                    desc="As a developer in the DocuSign Rotation Program I worked under two full-stack development teams; Developer Content 
                    and Click. Under the Developer Content team I created an internal tool that interfaced with the Jira and Google APIs to 
                    automate the creation of Jira Tickets. I also worked on the code examples which utilized five DocuSign APIs and showcased 
                    how to use them in eight programming languages. Additionally, I wrote several blog posts in the DocuSign Developer Blog.
                    Under the Click team I worked on the development of the multi-million dollar revenue Click product. I worked with React.js 
                    and TypeScript to create new features for the Click product including an integration with DocuSign's internal editor as well 
                    as creating a custom interface and functionality for uploading custom data fields. Additionally, I set up a Github and Jenkins 
                    integration that ran a coverage report and created a comment every time a pull request was open. Lastly, I created tests using 
                    Jest and XState/test that increased coverage testing from 68% line coverage to 80% line coverage."
                />
                <ExperienceSection 
                    title='DEVOPS & MOBILE DEVELOPMENT INTERN'
                    date='March 2021 - July 2021'
                    employer='XEVO'
                    desc="I spent a 5 month internship as a DevOps and Mobile Software Developer Intern at Xevo in Bellevue, WA. 
                    As a DevOps Intern I primarily created automation tools to be used in Xevo's development pipelines. I worked 
                    very closely with python, ansible, and many AWS resources. As a Mobile Dev Intern my primary task was creating 
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