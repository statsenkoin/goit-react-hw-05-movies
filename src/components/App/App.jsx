import { Layout } from 'components';
import { Home, Movies } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
