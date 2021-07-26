import React from 'react';

class Skill extends React.Component {
    render () {
        if (Number(this.props.skillLevel) < 2) {
            return (
                <div className='skillSection'>
                    <h4 style={{display: 'inline-block'}} className='skillName'>{this.props.name}</h4>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                </div>
            )
        }
        else if (Number(this.props.skillLevel) < 3) {
            return (
                <div className='skillSection'>
                    <h4 style={{display: 'inline-block'}} className='skillName'>{this.props.name}</h4>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                </div>
            )
        }
        else if (Number(this.props.skillLevel) < 4) {
            return (
                <div className='skillSection'>
                    <h4 style={{display: 'inline-block'}} className='skillName'>{this.props.name}</h4>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                </div>
            )
        }
        else if (Number(this.props.skillLevel) < 5) {
            return (
                <div className='skillSection'>
                    <h4 style={{display: 'inline-block'}} className='skillName'>{this.props.name}</h4>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#bfbfbf'}}/>
                </div>
            )
        }
        else if (Number(this.props.skillLevel) < 6) {
            return (
                <div className='skillSection'>
                    <h4 style={{display: 'inline-block'}} className='skillName'>{this.props.name}</h4>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                    <div className='skillBar' style={{backgroundColor: '#1c3b5e'}}/>
                </div>
            )
        }
    }
}

export default Skill