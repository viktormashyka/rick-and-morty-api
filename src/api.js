import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async signal => {
  const url = `${BASE_URL}/character/?page=2`;
  try {
    const response = await axios.get(url, { signal: signal });
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

export const fetchCharacterByName = async ({ query }) => {
  const url = `${BASE_URL}/character/?name=${query}`;
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

// const normalizeCharacterDetailsData = data => {
//   const { id, name, status, species, gender, image } = data;

//   // const posterUrl = 'https://image.tmdb.org/t/p/w300' + poster_path;
//   // const year = new Date(release_date).getFullYear();
//   // const userScore = Number.parseInt(vote_average * 10);
//   // const genresList = genres.map(({ name }) => name).join(', ');

//   return {
//     id,
//     name,
//     status,
//     species,
//     gender,
//     image,
//   };
// };

// export const fetchMovieByIdCast = async ({ movieId }) => {
//   const url = `${BASE_URL}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url);
//     console.log('fetchMovieByIdCast response.data.cast, ', response.data.cast);
//     // const movie = getNormalizedMovies(response.data.results);
//     const cast = response.data.cast;
//     return cast;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const fetchMovieByIdReviews = async ({ movieId }) => {
//   const url = `${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url);
//     console.log(
//       'fetchMovieByIdReviews response.data.results, ',
//       response.data.results
//     );
//     // const movie = getNormalizedMovies(response.data.results);
//     const movie = response.data.results;
//     return movie;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// import axios from 'axios';
// // import PropTypes from 'prop-types';

// // const { BASE_URL } = process.env;
// // const { API_KEY } = process.env;

// const BASE_URL = 'https://api.themoviedb.org/';
// const API_KEY = '857288c3c5f42347171bc7541b9a4b57';

// // const BASE_URL = 'https://rickandmortyapi.com/api';
// // https://rickandmortyapi.com/api/character
// // const BASE_URL = process.env.BASE_URL;
// // const API_KEY = process.env.API_KEY;

// export const fetchMoviesTrendingToday = async signal => {
//   const url = `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url, { signal: signal });
//     console.log(
//       'fetchMoviesTrendingToday response.data.results, ',
//       response.data.results
//     );
//     const movies = getNormalizedMovies(response.data.results);
//     return movies;
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       return [];
//     }
//     throw new Error(error);
//   }
// };

// // export const fetchMoviesTrendingToday = async () => {
// //   const url = `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
// //   try {
// //     const response = await axios.get(url);
// //     console.log(
// //       'fetchMoviesTrendingToday response.data.results, ',
// //       response.data.results
// //     );
// //     const movies = getNormalizedMovies(response.data.results);
// //     return movies;
// //   } catch (error) {
// //     throw new Error(error);
// //   }
// // };

// export const fetchMoviesByName = async ({ query }) => {
//   const url = `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
//   try {
//     const response = await axios.get(url);
//     console.log(
//       'fetchMoviesByName response.data.results, ',
//       response.data.results
//     );
//     const movies = getNormalizedMovies(response.data.results);
//     return movies;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const getNormalizedMovies = movies => {
//   const normalizedData = movies.map(
//     ({ id, original_title, title, overview, genres }) => {
//       return { id, original_title, title, overview, genres };
//     }
//   );
//   return normalizedData;
// };

// export const fetchMovieById = async ({ movieId }) => {
//   const url = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url);
//     console.log('fetchMoviesById response.data, ', response.data);
//     // const movie = getNormalizedMovies(response.data.results);
//     // const movie = response.data;
//     const movie = normalizeMovieDetailsData(response.data);
//     return movie;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const normalizeMovieDetailsData = data => {
//   const { title, poster_path, vote_average, overview, release_date, genres } =
//     data;

//   const posterUrl = 'https://image.tmdb.org/t/p/w300' + poster_path;
//   const year = new Date(release_date).getFullYear();
//   const userScore = Number.parseInt(vote_average * 10);
//   const genresList = genres.map(({ name }) => name).join(', ');

//   return {
//     title,
//     overview,
//     posterUrl,
//     year,
//     userScore,
//     genresList,
//   };
// };

// export const fetchMovieByIdCast = async ({ movieId }) => {
//   const url = `${BASE_URL}3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url);
//     console.log('fetchMovieByIdCast response.data.cast, ', response.data.cast);
//     // const movie = getNormalizedMovies(response.data.results);
//     const cast = response.data.cast;
//     return cast;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// export const fetchMovieByIdReviews = async ({ movieId }) => {
//   const url = `${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//   try {
//     const response = await axios.get(url);
//     console.log(
//       'fetchMovieByIdReviews response.data.results, ',
//       response.data.results
//     );
//     // const movie = getNormalizedMovies(response.data.results);
//     const movie = response.data.results;
//     return movie;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
