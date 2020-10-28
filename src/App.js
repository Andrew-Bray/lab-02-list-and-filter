import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';
import DropDown from './DropDown.js'

export default class App extends React.Component {
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

    // COOL ZONE
    return (
      <div className="app">
        <Header name="Andy" />
        <DropDown handleChange={this.handleChange} />
        <ImageList images={images} horns={this.state.horns} feel={this.state.feel} keyword={this.state.keyword} />
      </div>
    );
  }

}
