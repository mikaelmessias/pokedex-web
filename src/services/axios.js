import connector from 'axios';

export const axios = connector.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});