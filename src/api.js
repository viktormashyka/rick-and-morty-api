import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async ({ signal, page }) => {
  const url = `${BASE_URL}/character?page=${page}`;
  try {
    const response = await axios.get(url, { signal: signal, page });
    console.log(
      'fetchCharacters response.data.results, ',
      response.data.results
    );
    // const character = getNormalizedCharacter(response.data.results);
    const character = response.data.results;
    return character;
  } catch (error) {
    if (axios.isCancel(error)) {
      return [];
    }
    throw new Error(error);
  }
};

export const fetchCharacterByName = async ({ query, page }) => {
  const per_page = 20;
  const url = `${BASE_URL}/character/?name=${query}&page=${page}&per_page=${per_page}`;
  try {
    const response = await axios.get(url);
    console.log(
      'fetchCharacterByName response.data.results, ',
      response.data.results
    );
    // const character = getNormalizedCharacter(response.data.results);
    const character = response.data.results;
    return character;
  } catch (error) {
    throw new Error(error);
  }
};

// const getNormalizedCharacter = characters => {
//   const normalizedData = characters.map(
//     ({ id, name, status, species, gender }) => {
//       return { id, name, status, species, gender };
//     }
//   );
//   return normalizedData;
// };

export const fetchCharacterById = async ({ characterId }) => {
  const url = `${BASE_URL}/character/${characterId}`;
  try {
    const response = await axios.get(url);
    console.log('fetchCharacterById response.data, ', response.data);
    // const character = normalizeCharacterDetailsData(response.data);
    const character = response.data;
    return character;
  } catch (error) {
    throw new Error(error);
  }
};

// export const fetchCharactersPrevPage = async signal => {
//   const url = `${BASE_URL}/character/`;
//   try {
//     const response = await axios.get(url, { signal: signal });
//     console.log(
//       'fetchCharactersPrevPage response.data.info, ',
//       response.data.info
//     );
//     // const character = getNormalizedCharacter(response.data.results);
//     const character = response.data.info;
//     return character;
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       return [];
//     }
//     throw new Error(error);
//   }
// };
