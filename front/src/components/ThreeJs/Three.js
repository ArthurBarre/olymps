import React from 'react';
import Canvas from './Canvas';
import MapInfos from './MapInfos';

class Three extends React.Component {
  render() {
    return (
      <div className="threeContainer">
        <div className="infos-place">
          <MapInfos />
        </div>
        <div className="canvas">
          <Canvas svg={this.props.svg} />
        </div>
      </div>
    )
  }
}

export default Three
