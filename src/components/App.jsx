import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Characters = lazy(() => import('../pages/Characters'));
const CharacterDetails = lazy(() => import('../pages/CharacterDetails'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Navigate to="/character" />} />
          <Route path="/character" element={<Characters />} />
          <Route
            path="/character/:characterId"
            element={<CharacterDetails />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
