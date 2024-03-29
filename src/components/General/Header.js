import React from 'react';
import resume from '../../ConnorLunsfordResume.pdf'

class Header extends React.Component {
    render () {
        return (
            <div className="sectionDiv" id="Header">
                <h1 className="firstName">CONNOR&nbsp;</h1>
                <h1 className="lastName">LUNSFORD</h1>
                <h4 className="Contact">(206) - 552 - 5814 &#183; <a href='mailto:ca.lunsford@hotmail.com'>CA.LUNSFORD@HOTMAIL.COM</a></h4>
                <h4><a href={resume}>RESUME</a></h4>
                <br/>
                <p className="headerText">
                    I am a Software Developer with 1.5 years of experience proficient in Python, Javascript, and React. 
                    Currently I am searching for a career as a software developer at a Seattle area or remote company. 
                    If you have an questions please feel free to contact me through phone or email with the information provided above.
                </p>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/connor-lunsford/">
                        <img className="socialIcon" src='https://github.com/connorlunsford/portfolio/blob/master/public/linkedin-logo.png?raw=true' alt='linkedin'/>
                    </a>
                    <a href="https://github.com/connorlunsford">
                        <img className="socialIcon" src='https://github.com/connorlunsford/portfolio/blob/master/public/github-logo.png?raw=true' alt='github'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header