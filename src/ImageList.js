import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class ImageList extends Component {


    render() {
        // COOL ZONE

        return (
            <div>
                <p>Here is some Text in the Image List before the Image Item</p>
                <div>
                    {images.map((animal) => {
                        return <ImageItem
                            title={animal.title}
                            url={animal.url}
                            description={animal.description}
                            keyword={animal.keyword}
                            horns={animal.horns} />
                    })}
                </div>
            </div>
        )
    }
}
