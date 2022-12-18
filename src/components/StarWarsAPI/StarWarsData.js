import React from 'react';
import _ from 'lodash';

class StarWarsData extends React.Component {
    constructor () {
        super()
        this.state = {
        }

    }

    render() {
        console.log(this.props);
        if (this.props.type === 'pick one') {
            return null;
        } else {
            return(
                <div>
                    {Object.keys(this.props.data).map((component) => {
                        return (
                            <h6>{_.upperCase(component)}: {this.props.data[component]}</h6>
                        )
                    })}
                </div>
            )
        }
    }
}

export default StarWarsData
