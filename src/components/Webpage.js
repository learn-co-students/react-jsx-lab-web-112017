import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <title>`The world's coolest webpage`</title>
        </head>
        <body>
          <FillerText />
          <FillerText />
        </body>
      </div>
    )
  }
}

export default Webpage
