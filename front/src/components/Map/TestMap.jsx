import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { api_key } from '../constants';

const Marker = ({types}) => {
  const typeColor = {
      1: '#007bff',
      2:'#e3e',
      3:'#dc3545',
      4:'#FF005C',
      5:'#00FFFF',
      6:'#64FF6A',
      7:'#FF00C7',
      8:'#1400FF',
      9:'#FF0000',
      10:'#0CEF07',
      11:'#FFD600'
  }

  return(
    <div style={{width:'20px',height:'20px',borderRadius:50,backgroundColor:typeColor[types]}}></div>
  )
};

const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 48.8812,
      lng: 2.29364 });
    const [zoom, setZoom] = useState(11);
    const [data,setData] = useState([])

  	useEffect(
      () => {
        // fetch('http://127.0.0.1:8000/api/locations.json',{
        fetch('http://127.0.0.1:8000/locations',{
        })
        .then(res=>res.json())
        // .then(res=>console.log(res))
        .then(res=>setData(res))
      },[]
    )
    console.log(data)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          { data && data.map((d,i)=>{
            return(
              <Marker
                key={i}
                lat={d.lat}
                lng={d.lng}
                // text={d.name}
                types={d.types}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;