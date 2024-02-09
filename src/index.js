import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./../src/views/Home/Home";
import Contact from "./../src/views/Contact/Contact";
import About from "./../src/views/About/About";
import Gallary from "./../src/views/Gallary/Gallary";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },

  {
    path: '/gallary',
    element: <Gallary />,
  },

])

root.render(
  <RouterProvider router={router} />
);
