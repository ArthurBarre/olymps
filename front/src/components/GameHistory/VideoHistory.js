import React from 'react';
import sample from '../../assets/videos/first-video.mp4';

function videoHistory() {
  return (
    <div className='videoheader-background' >
      <div className="layer-video"></div>
      <video autoPlay muted>
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  )
}

export default videoHistory