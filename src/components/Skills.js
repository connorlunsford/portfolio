import React from 'react';
import Skill from './Skill';

class Skills extends React.Component {
    render () {
        return (
            <div className='sectionDiv' id="Skills">
                <h2>Skills</h2>
                <br></br>
                <Skill 
                    name='Python'
                    skillLevel='5'
                />
                <Skill 
                    name='Javascript'
                    skillLevel='4'
                />
                <Skill 
                    name='HTML/CSS'
                    skillLevel='5'
                />
                <Skill 
                    name='React.js'
                    skillLevel='3'
                />
                <Skill 
                    name='Node.js'
                    skillLevel='1'
                />
                <Skill 
                    name='C'
                    skillLevel='3'
                />
                <Skill 
                    name='C#'
                    skillLevel='1'
                />
                <Skill 
                    name='Unity'
                    skillLevel='3'
                />
                <Skill 
                    name='SQL'
                    skillLevel='3'
                />
                <Skill 
                    name='Ansible'
                    skillLevel='2'
                />
                <Skill 
                    name='Terraform'
                    skillLevel='1'
                />
                <Skill 
                    name='Flutter'
                    skillLevel='1'
                />
                <Skill 
                    name='Android SDK'
                    skillLevel='1'
                />
                <Skill 
                    name='AWS'
                    skillLevel='3'
                />
            </div>
        )
    }
}

export default Skills