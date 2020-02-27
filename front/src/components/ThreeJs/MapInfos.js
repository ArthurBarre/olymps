import React, { useState, useEffect } from 'react';
import ToolTip from '../Tooltips/Tooltip';


function MapInfos({ arrdt }) {

  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(
    () => {
      const update = (e) => {
        setX(e.x);
        setY(e.y);
      };
      window.addEventListener('mousemove', update);
      window.addEventListener('touchmove', update);
      return () => {
        window.removeEventListener('mousemove', update);
        window.removeEventListener('touchmove', update);
      };
    },
    [setX, setY]
  );

  const styles = {
    transform: `translate(${x}px, ${y}px)`
  };

  return (
    <div id="infos-container" className="infos-container" style={styles} >
      <ToolTip arrdt={arrdt} />
    </div>
  )
};

export default MapInfos;

