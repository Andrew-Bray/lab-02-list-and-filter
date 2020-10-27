import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>It is time to make some lists {this.props.name}, consarnit!</h1>
            </div>
        )
    }
}
