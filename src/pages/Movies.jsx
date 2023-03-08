// import { useSearchParams } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import { SearchBox } from '../components/SearchBox';
// import { fetchMoviesByName } from '../api';

// const Movies = ({ query }) => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams] = useSearchParams();
//   const movieName = searchParams.get('query') ?? '';
//   const location = useLocation();

//   useEffect(() => {
//     if (!movieName) return;
//     const getMovies = async () => {
//       const movies = await fetchMoviesByName({ query: movieName });
//       setMovies(movies);
//     };
//     getMovies();
//   }, [movieName]);

//   return (
//     <main style={{ marginLeft: '30px' }}>
//       <SearchBox />
//       <ul>
//         {movies.map(({ id, title }) => (
//           <li key={id}>
//             <Link to={`${id}`} state={{ from: location }}>
//               <p>{title}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default Movies;
