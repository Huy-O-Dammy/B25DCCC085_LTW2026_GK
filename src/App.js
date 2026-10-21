const BUILD_TAG = "zr-5093";
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('gk_tasks');
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        setTasks(parsed);
        setLoading(false);
        return;
      } catch (err) {
        // Fallback to fetch if corrupted
      }
    }

    const controller = new AbortController();

    axios
      .get('/data/tasks.json', { signal: controller.signal })
      .then((res) => {
        setTasks(res.data);
        setError(null);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return;
        }
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem('gk_tasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home tasks={tasks} />} />
        <Route
          path="tasks"
          element={
            <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          }
        />
        <Route
          path="tasks/new"
          element={<AddTask tasks={tasks} onAdd={addTask} />}
        />
        <Route path="tasks/:id" element={<TaskDetail tasks={tasks} />} />
      </Route>
    </Routes>
  );
};

export default App;
