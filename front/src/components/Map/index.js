import React from 'react';
import SvgMap from './SvgMap';
import MapVideo from './MapVideo';

class MapPage extends React.Component {
  render() {
    return (
      <div className="mapContainer">
        <div className="mapVideo">
          <MapVideo />
        </div>
        <div className="svgMap">
          {/* <SvgMap /> */}
        </div>
      </div>
    )
  }
}

export default MapPage;
