import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PasswordGenerationPage from './page/passwordGeneration.tsx'
import BreachDetectionPage from './page/BreachDetection.tsx'
import Popups from './components/Utills/Popups.tsx'
import ManagePasswordPage from './page/ManagePassword.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/passwordgenerate",
    element:<PasswordGenerationPage/>
  },
  {
    path:"/breachdetection",
    element:<BreachDetectionPage/>
  },
  {
    path:"/managepassword",
    element:<ManagePasswordPage/>
  }
])
createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
