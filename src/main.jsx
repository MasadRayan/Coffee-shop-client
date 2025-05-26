import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import login from './components/login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
        hydrateFallbackElement: <div>Data is loading</div>
      },
      {
        path: 'addcoffee',
        Component: AddCoffee
      },
      {
        path: '/coffee/:id',
        Component: CoffeeDetails,
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path: 'updateCoffee/:id',
        Component: UpdateCoffee,
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path: '/login',
        Component: login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: '/users',
        loader: () => fetch('http://localhost:3000/users'),
        Component: Users
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
