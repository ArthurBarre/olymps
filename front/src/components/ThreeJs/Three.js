import React from 'react'
import Canvas from './Canvas'
import MapInfos from './MapInfos'

const Three = ({ goHistory }) => {
  return (
    <div className="threeContainer">
      <div class="retun_display">
        <div class="return_bg" onClick={goHistory}>
          <div class="return_a" href="">
            PARIS 2024
          </div>
        </div>
      </div>
      <div className="canvas">
        <Canvas />
      </div>
    </div>
  )
}

export default Three
