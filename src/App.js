import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';

export default class App extends React.Component {



  // nocommas or semi-colons


  render() {

    // COOL ZONE
    return (
      <div className="app">
        <Header name="Andy" />
        <ImageList images={images} />
        {/* App.js imports the horned creatures data and passes it to ImageList */}
      </div>
    );
  }

}
