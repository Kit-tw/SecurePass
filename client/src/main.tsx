import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PasswordGenerationPage from './page/passwordGeneration.tsx'
import BreachDetectionPage from './page/BreachDetection.tsx'

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
  }
])
createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
