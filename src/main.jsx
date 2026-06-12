import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/user.jsx'
import Github from './components/github/github.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about", 
        element : <About/>
      },
      {
        path : "contact", 
        element : <Contact/>
      },
       {
        path : "/user/:id", 
        element : <User/>
      },
      {
        path : "/github",
        element : <Github/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
