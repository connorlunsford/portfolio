import React from 'react';
import NavBar from "./NavBar";
import Header from "./Header";
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';

class MainApp extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <Header />
                <Experience />
                <Projects />
                <Education />
                <Skills />
                <Interests />
            </div>
        )
    }
}

export default MainApp