import React from 'react'
import Canvas from './Canvas'
import MapVideo from './MapVideo'

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
