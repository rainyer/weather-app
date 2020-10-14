import { Coordinate } from "./domain"

export interface HomeState {
  coords: Coordinate;
  center: Coordinate;
  zoom: number;
  loading: boolean;
}