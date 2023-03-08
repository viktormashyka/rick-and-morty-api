import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SearchBox } from '../components/SearchBox';
import { fetchCharacters, fetchCharacterByName } from '../api';

const Characters = ({ query }) => {
  const [characters, setCharacters] = useState([]);
  const [searchParams] = useSearchParams();
  const characterName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        const characters = await fetchCharacters(controller.signal);
        setCharacters(characters);
      } catch (error) {
        console.log('Something went wrong:(');
      }
    };
    getCharacters();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!characterName) return;
    const getCharacters = async () => {
      const characters = await fetchCharacterByName({ query: characterName });
      setCharacters(characters);
    };
    getCharacters();
  }, [characterName]);

  return (
    <main style={{ marginLeft: '30px' }}>
      <h1>LOGO</h1>
      <img
        src="../images/PngItem_438051 1.png"
        alt="title"
        width="600"
        height="200"
      />
      <SearchBox />
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {/* <Link to={`character/${character.id}`} state={{ from: location }}> */}
            <Link to={`${character.id}`} state={{ from: location }}>
              <img src="{character.image}" alt="{character.name}" />
              <p>{character.name}</p>
              <p>{character.species}</p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul>
        {characters.map(({ id, name, species }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
            <img src="image" alt="name" />
              <p>{name}</p>
              <p>{species}</p>
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
};

export default Characters;

// import { Link, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import { fetchMoviesTrendingToday } from 'api';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     const controller = new AbortController();
//     const getMovies = async () => {
//       try {
//         const movies = await fetchMoviesTrendingToday(controller.signal);
//         setMovies(movies);
//       } catch (error) {
//         console.log('Something went wrong:(');
//       }
//     };
//     getMovies();

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <main style={{ marginLeft: '30px' }}>
//       <h1>Trending today</h1>
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>
//             <Link to={`movies/${movie.id}`} state={{ from: location }}>
//               <p>{movie.title}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default Home;
