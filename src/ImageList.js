import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
//import images from './data.js';

export default class ImageList extends Component {
    state = {
        horns: '',
        feel: '',
        keyword: '',

    }

    handleChange = e => {
        this.setState({
            horns: e.target.value,
            feel: e.target.value,
            keyword: e.target.value,
        });
    }

    render() {
        const filteredKeyword = this.props.images.filter((animal) => {
            // code golf: this.props.images.filter((animal) => !this.state.filter || (animal.horns === this.state.filter))
            if (!this.state.keyword) return true;
            if (animal.keyword === this.state.keyword) return true;
            return false
        });
        const filteredHornsAmount = this.props.images.filter((animal) => {
            // code golf: this.props.images.filter((animal) => !this.state.filter || (animal.horns === this.state.filter))
            if (!this.state.horns) return true;
            if (animal.horns === +this.state.horns) return true;
            return false
        });
        const filteredFeelQuality = this.props.images.filter((animal) => {
            // code golf: this.props.images.filter((animal) => !this.state.filter || (animal.horns === this.state.filter))
            if (!this.state.feel) return true;
            if (animal.feel === this.state.feel) return true;
            return false
        });

        return (
            <div>
                <select onChange={this.handleChange}>
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
                <select onChange={this.handleChange}>
                    <option value=''>Horn Amount:</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>
                <select onChange={this.handleChange}>
                    <option value=''>How does it feel?</option>
                    <option value='rough'>Rough</option>
                    <option value='wet'>Wet</option>
                    <option value='fuzzy'>fuzzy</option>
                    <option value='magical'>Magical</option>
                    <option value='ouchy'>Ouchy</option>
                </select>
                <div className="horn-container">

                    {filteredKeyword.map(animal =>
                        <ImageItem
                            title={animal.title}
                            url={animal.url}
                            description={animal.description}
                            keyword={animal.keyword}
                            horns={animal.horns}
                        />)
                    }


                    {filteredHornsAmount.map(animal =>
                        <ImageItem
                            title={animal.title}
                            url={animal.url}
                            description={animal.description}
                            keyword={animal.keyword}
                            horns={animal.horns}
                        />)
                    }


                    {filteredFeelQuality.map(animal =>
                        <ImageItem
                            title={animal.title}
                            url={animal.url}
                            description={animal.description}
                            keyword={animal.keyword}
                            horns={animal.horns}
                        />)
                    }

                </div>
            </div>
        )
    }
}
