import React from 'react';


export default class ImageItem extends React.Component {
    render() {
        // COOL ZONE
        return (
            <div className='horned-animals'>
                <h2>{this.props.title}</h2>
                <img className='horn' src={this.props.url} alt={this.props.keyword} />
                <div className='description '>{this.props.description}</div>
                <h3>Number of Horns: {this.props.horns}</h3>
            </div>
        )
    }
}
