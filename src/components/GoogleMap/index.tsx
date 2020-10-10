import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchButton from "../SearchButton";
import Marker from '../Marker';

interface Coords {
  lat: any;
  lng: any;
}

const GOOGLE_MAPS_API_KEY =  process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''

const GoogleMap = (props: any) => {
    const [center, setCenter] = useState<Coords>({lat: -22.90278, lng: -43.2075 });
    const [coords, setCoords] = useState<Coords>({lat: -22.90278, lng: -43.2075 });
    const [zoom, setZoom] = useState(3);
    
    
    const onMapClick = (eventValue: GoogleMapReact.ClickEventValue) => {
       const nextCoords: Coords = {
        lat: eventValue.lat,
        lng: eventValue.lng
       }
       setCoords(nextCoords)
    }
    
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <SearchButton onClick={()=>{}} />
        <GoogleMapReact
          options={{ draggableCursor: 'pointer' }}
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY}}
          defaultCenter={center}
          defaultZoom={zoom}
          onClick={onMapClick}
        >
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default GoogleMap;