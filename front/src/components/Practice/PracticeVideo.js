import React from 'react';
import sample from '../../assets/videos/third-video.mp4';

function videoPractice() {
  return (
    <div className='videoheader-background' >
      <div className="layer-video"></div>
      <video autoPlay muted>
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  )
}

export default videoPractice