import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PasswordGenerationPage from './page/passwordGeneration.tsx'
import BreachDetectionPage from './page/BreachDetection.tsx'
import ManagePasswordPage from './page/ManagePassword.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryClient.ts'
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
  },

])
createRoot(document.getElementById('root')!).render(
  <>
  <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>\
        </QueryClientProvider>

  </>,
)
