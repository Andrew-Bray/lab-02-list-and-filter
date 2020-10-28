import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div>
                <div className="select">
                    <select onChange={this.props.handleChange}>
                        <option value=''>Name:</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='unicorn'>unicorn</option>
                        <option value='unilego'>unilego</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>mouflon</option>
                        <option value='addax'>addax</option>
                        <option value='chameleon'>chameleon</option>
                        <option value='lizard'>lizard</option>
                        <option value='dragon'>dragon</option>
                    </select>
                    <select onChange={this.props.handleChange}>
                        <option value=''>Horn Amount:</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='100'>100</option>
                    </select>
                    <select onChange={this.props.handleChange}>
                        <option value=''>How does it feel?</option>
                        <option value='rough'>Rough</option>
                        <option value='wet'>Wet</option>
                        <option value='fuzzy'>fuzzy</option>
                        <option value='magical'>Magical</option>
                        <option value='ouchy'>Ouchy</option>
                    </select>
                </div>
            </div>
        )
    }
}
