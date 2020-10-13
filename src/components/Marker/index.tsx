import React from 'react';
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Marker = (props: any) => {
  const { color, name, id } = props;
  return (
      <LocationOnIcon 
        style={{
          color: '#EA4335', 
          fontSize: 40,
          transform: "translate(-50%, -100%)" 
        }}
      />
  );
};

export default Marker;
