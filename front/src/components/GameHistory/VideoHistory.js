import React from 'react';
import sample from '../../assets/videos/videoloopmap.mp4';

function videoHeader() {
  return (
    <div className='videoheader-background' >
      <div className="layer-video"></div>
      <video autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  )
}

export default videoHeader