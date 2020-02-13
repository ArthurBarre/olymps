import React from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
import { useState,useEffect } from 'react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: 2, lng: 2 },
  map,
  title: 'Hello World!'
  });
  return marker;
 };


export function MapContainer(props) {

  const [showInfo,setShowInfo]= useState(false)
  const [activeMarker,setActiveMarker]= useState({})
  const [selectedPlace,setSelectedPlace]= useState({})
  const [data,setData] = useState([])

	useEffect(
		() => {
			fetch('http://localhost:8000/locations',{
			})
			.then(res=>res.json())
			// .then(res=>console.log(res))
			.then(res=>setData(res))
		},[]
	)
  function onMarkerClick  (props, marker, e) {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowInfo(true)
  }

  function onClose (props) {
    if (showInfo) {
      setShowInfo(false)
      setActiveMarker(null)
    }
  }

    return (
      <Map
        google={props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{ lat: 48, lng: 2.33 }}
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}

      >
        {/* <Marker
          onClick={onMarkerClick}
          lat={12}
          lng={12}
          name={'Kenyatta International Convention Centre'}
        /> */}
        {
          data && data.map((d,i)=>{
            return(
              <Marker style={{border:'1px solid red'}} position={{ lat: d.lat, lng: d.lng }} />
              //  <Marker
              //           // icon={iconMarker}
              //           key={i}
              //           position={{ lat: parseInt(d.lat), lng: parseInt(d.lng)}}>
              //           {selectedPlace === d &&
              //           <InfoWindow>
              //               <div style={{'color':'black'}}>
              //                 Infowindow texte
              //               </div>
              //           </InfoWindow>}
              //       </Marker>
            )
          })
        }
       
        <InfoWindow
          marker={activeMarker}
          visible={showInfo}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
}

export default GoogleApiWrapper({
apiKey: 'AIzaSyBNBUUXd7RW82C5suLr4YwLzXpE5vgmpuo'
})(MapContainer);