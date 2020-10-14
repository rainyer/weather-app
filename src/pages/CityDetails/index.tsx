import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { CityDetailsProps, CityInfoProps } from '../../types/props';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function NotFound() {
  return (
    <div>
      Sorry we could not find the city data
    </div>
  )
}

const CityInfo = (props: CityInfoProps) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {props.city.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {props.city.main.temp_max + '-' + props.city.main.temp_min}
      </Typography>
    </div>
  )
}

function CityDetails(props: CityDetailsProps) {
  const { cityId } = useParams()
  const city = props.cities.find(c => c.id == cityId)
  return city ? <CityInfo city={city} /> : <NotFound />
}

CityDetails.defaultProps = {
  cities: []
}

const mapStateToProps = (state: StoreState) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps, null)(CityDetails)

