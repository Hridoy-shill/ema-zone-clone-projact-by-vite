import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import OrdersPage from './components/OrdersPage/OrdersPage';
import Inventory from './components/Inventory/Inventory';
import LogInPage from './components/LogInPage/LogInPage';
import CardProductsLoader from './DataLoader/CartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <OrdersPage></OrdersPage>,
        loader: CardProductsLoader,

      },
      {
        path: '/checkout',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
      {
        path: 'inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'login',
        element: <LogInPage></LogInPage>
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>
      }
    ]

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
