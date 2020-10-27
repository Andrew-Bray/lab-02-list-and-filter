import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js'

export default class App extends React.Component {
  //   state = {
  // }
  // nocommas or semi-colons


  render() {

    // COOL ZONE
    return (
      <div className="app">
        <Header name="Andy" />
        <div>This is some text</div>
        <ImageList />
        {/* App.js imports the horned creatures data and passes it to ImageList */}
      </div>
    );
  }

}
