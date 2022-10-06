import React from 'react';

class ImageSection extends React.Component {
    render () {
        return this.props.images.map((imageSrc) => {
            return (
                <img 
                    src={`https://raw.githubusercontent.com/connorlunsford/portfolio/master/public/project_images/${imageSrc}`}
                    alt={imageSrc}
                    className={"projectImage"}
                />
            )
        })
    }
}

export default ImageSection