import React from 'react';
import Canvas from './Canvas';
import MapInfos from './MapInfos';

class Three extends React.Component {
  render() {
    return (
      <div className="threeContainer">
        <div class="retun_display">
          <div class="return_bg">
            <a class="return_a" href="">PARIS 2024</a>
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
