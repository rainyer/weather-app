import { City } from "./domain";

export interface HomeProps {
  cities: City[];
  setCities(cities: City[]): any;
}

export interface CityDetailsProps {
  cities: City[];
}

export interface CitiesListProps {
  cities: City[];
}

export interface CityInfoProps {
  city: City;
}
