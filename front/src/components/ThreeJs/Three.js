import React from 'react';
import Canvas from './Canvas';
import MapInfos from './MapInfos';

class Three extends React.Component {
  render() {
    return (
      <div className="threeContainer">
        <div className="ctaReturn_display">
          <div className="ctaReturn_bg">
            <a className="ctaReturn_a" href="">Return</a>
          </div>
        </div>
        <div className="canvas">
          <Canvas />
        </div>
      </div>
    )
  }
}

export default Three
