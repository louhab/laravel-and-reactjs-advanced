import { createBrowserRouter } from 'react-router-dom';
import  Home  from '../pages/Home';
import  Login  from '../pages/Login';
import  Register  from '../pages/Register';
import Users from '../pages/Users';
import PageNotFound from '../pages/PageNotFound';
import React from 'react';
import Layouts from '../layouts/layouts'

export const router = createBrowserRouter([
    {
    element: <Layouts />,
    children: [
                {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/register',
      element: <Register/>,
    },
    {
      path: '/users',
      element: <Users/>,
    },
    {
      path: '*',
      element: <PageNotFound/>,
    },
      ]
    },
  ],
);
