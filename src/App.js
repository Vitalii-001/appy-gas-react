import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';

import Footer from './components/layout/Footer';

import Dashboard from './components/pages/Dashboard';
import FlowsMap from './components/pages/Flows-map';
import RouteCalculator from './components/pages/Route-calculator';
import Availability from './components/pages/Availability';
import RootLayout from './components/pages/Root';

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
      }
    ]
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
}

export default App;
