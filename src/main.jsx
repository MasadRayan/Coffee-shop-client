import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

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
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
