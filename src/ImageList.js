import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
//import images from './data.js';

export default class ImageList extends Component {

    render() {
        const filteredKeyword = this.props.images.filter((animal) => {
            // code golf: this.props.images.filter((animal) => !this.state.filter || (animal.horns === this.state.filter))
            if (!this.props.keyword) return true;
            if (animal.keyword === this.props.keyword) return true;
            return false
        });
        const filteredHornsAmount = this.props.images.filter((animal) => {
            // code golf: this.props.images.filter((animal) => !this.props.filter || (animal.horns === this.props.filter))
            if (!this.props.horns) return true;
            if (animal.horns === +this.props.horns) return true;
            return false
        });
        const filteredFeelQuality = this.props.images.filter((animal) => {
            // code golf: this.props.images.filter((animal) => !this.props.filter || (animal.horns === this.props.filter))
            if (!this.props.feel) return true;
            if (animal.feel === this.props.feel) return true;
            return false
        });

        return (
            <div>
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
