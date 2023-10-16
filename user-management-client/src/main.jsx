import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Homepage.jsx';
import CreateUser from './CreateUser.jsx';
import UpdateUsers from './UpdateUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/newUser",
        element: <CreateUser></CreateUser>,
      },
      {
        path: "/updateUsers/:id",
        loader: ({params})=>fetch(`https://user-management-server-sajeed-enayet-anindas-projects.vercel.app/users/${params.id}`),
        element: <UpdateUsers></UpdateUsers>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
