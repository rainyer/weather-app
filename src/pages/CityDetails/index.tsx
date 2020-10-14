import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { CityDetailsProps, CityInfoProps } from '../../types/props';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { NotFound, CityInfo } from './styles';

function CityDetails(props: CityDetailsProps) {
  
  const { cityId } = useParams();
  const city = props.cities.find((c) => c.id == cityId);

  return city ? (
    <CityInfo>
      <Typography variant="h3" gutterBottom>
        {city.name}
      </Typography>
      <div>
        <Typography variant="h6" gutterBottom>
          {'Maximum temperature: ' + city.main.temp_max.toFixed() + '°C'}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {'Minimum temperature: ' + city.main.temp_min.toFixed() + '°C'}
        </Typography>
      </div>
    </CityInfo>
  ) : (
    <NotFound>
      <Typography variant="h4" gutterBottom>
        {'Sorry we could not find the city data :('}
      </Typography>
    </NotFound>
  );
}

CityDetails.defaultProps = {
  cities: [],
};

const mapStateToProps = (state: StoreState) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps, null)(CityDetails);
