import React from 'react'
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { City } from "../../reducers/citiesReducer";

interface CityDetailsProps {
  cities?: City[]
}

function CityDetails(props: CityDetailsProps) {
  console.log({ props })
  return (
    <div>
      Yo
    </div>
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, null)(CityDetails)
