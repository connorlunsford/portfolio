import React from 'react';
import EducationSection from './EducationSection';

class Education extends React.Component {
    render () {
        return (
            <div className="sectionDiv" id="Education">
                <h2>Education</h2>
                <EducationSection 
                    school="OREGON STATE UNIVERSITY"
                    degree="BACHELORS OF SCIENCE - COMPUTER SCIENCE"
                    date="January 2020 - June 2021"
                />
                <EducationSection 
                    school="WHITWORTH UNIVERSITY"
                    degree="BACHELORS OF SCIENCE - HEALTH SCIENCE"
                    date="September 2015 - March 2019"
                    minors="Minors in Chemistry and Biology"
                />
            </div>
        )
    }
}

export default Education