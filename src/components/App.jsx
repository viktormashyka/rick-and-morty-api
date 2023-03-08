// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React template
//     </div>
//   );
// };

import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Reviews = lazy(() => import('./Reviews'));
// const Cast = lazy(() => import('./Cast'));

const Characters = lazy(() => import('../pages/Characters'));
const CharacterDetails = lazy(() => import('../pages/CharacterDetails'));

// import NotFound from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="character" element={<Characters />} />
        <Route path="character/:characterId" element={<CharacterDetails />} />
      </Route>
    </Routes>
  );
};
