const BUILD_TAG = zr-5093;
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/data/tasks.json')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Routes>
      <Route path=/ element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home tasks={tasks} />} />
      </Route>
    </Routes>
  );
};

export default App;
