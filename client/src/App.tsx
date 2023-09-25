import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

import Footer from './components/layout/Footer';

import Dashboard from './pages/Dashboard/Dashboard';
import FlowsMap from './pages/Flows-map';
import RouteCalculator from './pages/Route-calculator';
import Availability from './pages/Availability';
import RootLayout from './pages/Root';
import Download from './pages/Download';
import SignIn from './components/Auth/SignInForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "flows-map",
        element: <FlowsMap />,
      },
      {
        path: "route-calculator",
        element: <RouteCalculator />,
      },
      {
        path: "availability",
        element: <Availability />,
      },
      {
        path: "download",
        element: <Download />,
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
