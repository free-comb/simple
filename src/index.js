import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home";
import Exchange from './Pages/Exchange';
import Checkout from './Pages/Checkout';
import ExchangeInProgress from './Pages/ExchangeInProgress';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/exchange",
    element:<Exchange/>
  },
  {
    path:"/exchange/waiting-for-payment",
    element:<Checkout/>
  },
  {
    path:"/exchange/exchange-in-progress",
    element:<ExchangeInProgress/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



