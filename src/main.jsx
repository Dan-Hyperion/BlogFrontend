import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blogs from './pages/Blogs.jsx'

const paths = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/blogs',
    element: <Blogs/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={paths} />
  </StrictMode>,
)
