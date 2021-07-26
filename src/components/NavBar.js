import React from 'react';

class NavBar extends React.Component {
    render () {
        return (
            <div className="NavBar">
                <img src="https://github.com/connorlunsford/portfolio/blob/master/public/profile.png?raw=true" className="ProfilePicture" alt="Profile"/>
                <ul className="NavBarList">
                    <li className="NavItem"><a href="#Header" className="NavLink">ABOUT</a></li>
                    <li className="NavItem"><a href="#Experience"className="NavLink">EXPERIENCE</a></li>
                    <li className="NavItem"><a href="#Projects"className="NavLink">PROJECTS</a></li>
                    <li className="NavItem"><a href="#Education"className="NavLink">EDUCATION</a></li>
                    <li className="NavItem"><a href="#Skills"className="NavLink">SKILLS</a></li>
                    <li className="NavItem"><a href="#Interests"className="NavLink">INTERESTS</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar