import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



interface City {
  name: string;
}

interface CitiesListProps {
  cities: City[];
  onItemPress(city: City): any;
}


const CitiesList = (props: CitiesListProps) => {
  return (
    <List style={{maxHeight: '558px', overflowY: 'scroll'}}>
      {props.cities.map(city => {
        return <ListItem
          button
          onClick={() => props.onItemPress(city)}
        >
          <ListItemText>
            {city.name}
          </ListItemText>
        </ListItem>
      })}
    </List>
  )
}

export default CitiesList