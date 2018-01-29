import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render () {
    const title = "The world's coolest webpage"
    return (
      <div>
      <h1>{title}</h1>
      <FillerText />
      <FillerText />
      </div>
    )
  }
}

export default Webpage
