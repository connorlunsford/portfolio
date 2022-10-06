import React from 'react';

class ImageSection extends React.Component {
    render () {
        return this.props.images.map((imageSrc) => {
            return (
                <img 
                    src={`https://github.com/connorlunsford/portfolio/blob/master/public/project_images/${imageSrc}`}
                    alt={imageSrc}
                />
            )
        })
    }
}

export default ImageSection