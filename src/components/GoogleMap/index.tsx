import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchButton from "../SearchButton";
import Marker from '../Marker';

interface Coords {
  lat: any;
  lng: any;
}

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const GoogleMap = (props: any) => {
    const [center, setCenter] = useState<Coords>({lat: -22.90278, lng: -43.2075 });
    const [coords, setCoords] = useState<Coords>({lat: -22.90278, lng: -43.2075 });
    const [zoom, setZoom] = useState(3);
    
    
    const _onClick = (obj: GoogleMapReact.ClickEventValue) => {
       const nextCoords: Coords = {
        lat: obj.lat,
        lng: obj.lng
       }
       console.log({ nextCoords })
       setCoords(nextCoords)
    }
    
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <SearchButton onClick={()=>{}} />
        <GoogleMapReact
          options={{ draggableCursor: 'pointer' }}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}}
          defaultCenter={center}
          defaultZoom={zoom}
          onClick={_onClick}
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