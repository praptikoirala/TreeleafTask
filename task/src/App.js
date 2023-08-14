import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './globals.css';

import UserEntry from './components/user-entry';
import ProfileContainer from './components/profile-container';


const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserEntry />,
    },
    {
      path: "/profile",
      element: <ProfileContainer />
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
