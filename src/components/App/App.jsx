import { Layout } from 'components';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="movies" element={<div>Movies</div>} />
      </Route>
    </Routes>
  );
};
