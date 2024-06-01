import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import New from './components/New';
import Popular from './components/Popular';
import Trending from './components/Trending';
import Categories from './components/Categories';

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/new", Component: New },
  { path: "/popular", Component: Popular },
  { path: "/trending", Component: Trending },
  { path: "/categories", Component: Categories }

])

function App() {
  return (
    <>
      <RouterProvider router={router}/>

    </>
  );
}

export default App;
