import React from 'react';
import ProjectSection from './ProjectSection';
import ToDoList from './ToDoList/ToDoList';
import StarWarsDiv from './StarWarsAPI/StarWarsDiv';

class Projects extends React.Component {
    render () {
        return (
            <div className='sectionDiv' id="Projects">
                <h2>PROJECTS</h2>
                <ProjectSection 
                    title='PLANET ZOO COMPATIBILITY FINDER'
                    type='PERSONAL PROJECT'
                    link='https://github.com/connorlunsford/planet-zoo-compatibility-finder'
                    date='July 2022'
                    desc='The Planet Zoo Compatibility Finder is an command line tool that allows the user to find lists of 
                    animals within the game Planet Zoo that share a compatibility rating. It does this using a custom made 
                    algorithm which recursively searches a compatibility matrix to discover every possible combination of 
                    animals that have a certain compatibility rating or above with one another.'
                    images={["PlanetZooCompatibilityFinder01.PNG", "PlanetZooCompatibilityFinder02.PNG"]}
                />
                <ProjectSection 
                    title='TEXT-BASED ADVENTURE GAME'
                    type='OREGON STATE UNIVERSITY CAPSTONE'
                    link='https://github.com/connorlunsford/text-based-adventure-game'
                    date='June 2021'
                    desc='Text-Based Adventure Game System is a system created to host text-input games similar to Zork 
                    or Colossal Cave Adventure. It was designed to be genre agnostic, which was demonstrated with the 
                    current game that is hosted in the repository Death by Digital Detox, which is a murder mystery that 
                    allows you to speak to characters in order to gather more evidence to find the killer. The system uses 
                    a natural language parser in order to allow for realistic text input for the user to interact with the game.'
                    images={["TextBasedAdventureGame.png"]}
                />
                <ProjectSection 
                    title='SMALLSH'
                    type='OREGON STATE UNIVERSITY PROJECT'
                    link='https://github.com/connorlunsford/smallsh'
                    date='December 2020'
                    desc='Smallsh is a Linux shell created in C. It has full implementations of any Linux command, 
                    as well as hard coded implementations of cd, exit, and status. It handles comments using #, it 
                    can run commands in the background using &, and it expands $$ into the process id. It demonstrates 
                    understanding of the C library and concepts.'
                    images={[]}
                />
                <ProjectSection 
                    title='CLEAR CREEK ZOO MANAGEMENT APP'
                    type='PERSONAL PROJECT'
                    link='https://github.com/connorlunsford/clear-creek-zoo'
                    date='January 2021'
                    desc='Clear Creek Zoo is a website and database for managing a fictional zoo in the pacific northwest. 
                    It has full implementation of a server using Javascript and Node.js, 
                    as well as a full front-end application for managing the database. The website allows the user to 
                    view all entities, insert a new entry into the database, update an entry, and delete entries.'
                    images={["ClearCreekZoo01.png", "ClearCreekZoo02.png", "ClearCreekZoo03.png"]}
                />
                <ProjectSection 
                    title='REACT PORTFOLIO'
                    type='PERSONAL PROJECT'
                    link='https://github.com/connorlunsford/portfolio'
                    date='July 2021'
                    desc='In July of 2021 I decided to update my portfolio with a little bit of React. I started learning 
                    React and created some small projects in order to test my skills. After working through a few projects 
                    that I have linked below, I completely redid my portfolio from the ground up using React.js. The projects 
                    below are meant to demonstrate different aspects of react that I have learned.'
                    images={[]}
                />
                <ToDoList/>
                <br/>
                <StarWarsDiv/>
            </div>
        )
    }
}

export default Projects