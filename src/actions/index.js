import axios from 'axios';

const ROOT_URL = `http://arrive-interview-api.azurewebsites.net/api/carrier`;

export const FETCH_CARRIER_CITY = 'FETCH_CARRIER_CITY';
export const SELECTED_CARRIER = 'SELECTED_CARRIER';

export var location;

export function fetchCarrierCity(city) {
  location = `${city}`;
  const url = `${ROOT_URL}s/${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_CARRIER_CITY,
    payload: request
  };
}

export function selectCarrier(id) {
  const url = `${ROOT_URL}Details/${id.Id}`;
  const request = axios.get(url);
  
    return {
      type: SELECTED_CARRIER,
      payload: request
    };
}