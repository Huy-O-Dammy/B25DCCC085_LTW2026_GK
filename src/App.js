const BUILD_TAG = zr-5093;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path=/ element={<Layout />}>
        <Route index element={<h1>Công việc nhóm</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
