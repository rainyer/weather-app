import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { SearchButton, Marker, CitiesList } from '../../components';
import { Creators as citiesActions } from '../../reducers/citiesReducer';
import axios from 'axios';
import { connect } from 'react-redux';
import { Coordinate, City } from '../../types/domain';
import { HomeProps } from '../../types/component-props';
import { HomeState } from '../../types/component-state';
import { StoreState } from '../../reducers';
import { AppTitle, Container, MapSection, CitiesSection } from './styles';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY || '';
const INITIAL_COORDINATE: Coordinate = {
  lat: -22.90278,
  lng: -43.2075,
};

class HomePage extends React.Component<HomeProps, HomeState> {
  static defaultProps = { cities: [] };

  state = {
    coords: INITIAL_COORDINATE,
    center: INITIAL_COORDINATE,
    zoom: 3,
    loading: false,
  };

  setLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  setZoom = (zoom: number): void => {
    this.setState({ zoom });
  };

  setCenter = (coords: Coordinate): void => {
    this.setState({ center: coords });
  };

  setCoords = (coords: Coordinate): void => {
    this.setState({ coords });
  };

  onMapClick = (eventValue: GoogleMapReact.ClickEventValue): void => {
    const nextCoords: Coordinate = {
      lat: eventValue.lat,
      lng: eventValue.lng,
    };
    this.setCoords(nextCoords);
  };

  getWeatherData = async (coords: Coordinate): Promise<any> => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/find?lat=${coords.lat}&lon=${coords.lng}&cnt=15&units=metric&appid=${WEATHER_API_KEY}`;

    try {
      this.setLoading(true);
      const response = await axios.get(weatherApiUrl);
      this.setLoading(false);
      this.props.setCities(response.data.list);
    } catch (error) {
      this.setLoading(false);
    }
  };

  render() {
    const { cities } = this.props;
    const { center, zoom, coords, loading } = this.state;
    return (
      <>
        <AppTitle>Weather App Modec</AppTitle>
        <Container>
          <MapSection>
            <GoogleMapReact
              options={{ draggableCursor: 'pointer' }}
              bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
              defaultCenter={center}
              defaultZoom={zoom}
              onClick={this.onMapClick}
            >
              <Marker
                lat={coords.lat}
                lng={coords.lng}
                name="My Marker"
                color="blue"
              />
            </GoogleMapReact>
          </MapSection>

          <CitiesSection>
            <SearchButton
              color="primary"
              text={'Search'}
              onClick={() => this.getWeatherData(coords)}
              loading={loading}
            />
            <CitiesList cities={cities} />
          </CitiesSection>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps, {
  ...citiesActions,
})(HomePage);
