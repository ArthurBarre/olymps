import React from 'react'
import Canvas from './Canvas'
import MapVideo from './MapVideo'

class Three extends React.Component {
  render() {
    return (
      <div className="threeContainer">
        <div className="canvas">
          <Canvas svg={this.props.svg} />
        </div>
        {/* <div className="threeVideo">
          <MapVideo />
        </div> */}
      </div>
    )
  }
}

export default Three
