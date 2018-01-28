import React from 'react';
import Filler from './FillerText.js'

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        < Filler />
        < Filler />
      </div>
    );
  }
}

export default Webpage;
