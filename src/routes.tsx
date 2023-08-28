import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { Notifications, notifications } from '@mantine/notifications'
import { IconX } from '@tabler/icons-react'

import { ProtectedRoute } from './shared/auth'
import { ContentsPage } from './pages/Contents'
import { ContentPage } from './pages/Content'
import { LoginSignUpPage } from './pages/LoginSignUp'
import { OpenLayout } from './shared/components/OpenLayout'
import { ProtectedLayout } from './shared/components/ProtectedLayout'
const paths = {
  contents: '/contents',
  loginSignUp: '/loginSignUp',
}
export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute component={ContentsPage} />,
      },
      {
        path: ':contentId',
        element: <ProtectedRoute component={ContentPage} />,
      },
    ],
  },
  {
    path: '/',
    element: <OpenLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.loginSignUp} />,
      },
      {
        path: paths.loginSignUp,
        element: <LoginSignUpPage />,
      },
    ],
  },
])
