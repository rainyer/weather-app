import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { SearchButton, Marker, CitiesList } from '../../components';
import axios from 'axios';

interface Coords {
  lat: number;
  lng: number;
}

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY || '';
console.log(WEATHER_API_KEY);

const HomePage = (props: any) => {
  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);
  const [center, setCenter] = useState<Coords>({
    lat: -22.90278,
    lng: -43.2075,
  });
  const [coords, setCoords] = useState<Coords>({
    lat: -22.90278,
    lng: -43.2075,
  });
  const [zoom, setZoom] = useState(3);

  const onMapClick = (eventValue: GoogleMapReact.ClickEventValue) => {
    const nextCoords: Coords = {
      lat: eventValue.lat,
      lng: eventValue.lng,
    };
    setCoords(nextCoords);
  };

  const getWeatherData = async (coords: Coords) => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/find?lat=${coords.lat}&lon=${coords.lng}&cnt=15&appid=${WEATHER_API_KEY}`;
    setLoadingCities(true);
    try {
      const response = await axios.get(weatherApiUrl);
      setLoadingCities(false);
      setCities(response.data.list);
    } catch (error) {
      setLoadingCities(false);
      setCities([]);
    }
  };

  return (
    <>
      <h1
        style={{
          paddingLeft: 16,
        }}
      >
        Weather App Modec
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          padding: 16,
        }}
      >
        <section
          style={{
            flex: 1,
            minWidth: '300px',
            height: '600px',
            marginBottom: 16,
          }}
        >
          <GoogleMapReact
            options={{ draggableCursor: 'pointer' }}
            bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
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
        </section>

        <section style={{ flex: 1, width: '350px', marginLeft: 16 }}>
          <SearchButton
            color="primary"
            text={'Search'}
            onClick={() => getWeatherData(coords)}
            loading={loadingCities}
          />

          <CitiesList
            cities={cities}
            onItemPress={(city) => console.log(city)}
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
