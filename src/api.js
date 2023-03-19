import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async ({ signal }) => {
  const url = `${BASE_URL}/character?page=1`;
  try {
    const response = await axios.get(url, { signal: signal });
    const character = response.data.results;
    return character;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

export const fetchCharacterByName = async ({ query }) => {
  const url = `${BASE_URL}/character/?name=${query}&page=1`;
  try {
    const response = await axios.get(url);
    const character = response.data.results;
    return character;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCharacterById = async ({ characterId }) => {
  const url = `${BASE_URL}/character/${characterId}`;
  try {
    const response = await axios.get(url);
    const character = response.data;
    return character;
  } catch (error) {
    throw new Error(error);
  }
};
