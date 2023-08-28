import { Notifications, notifications } from '@mantine/notifications'
import { ProtectedRoute } from './shared/auth'
import { ContentsPage } from './pages/Contents'
import { ContentPage } from './pages/Content'
import { LoginSignUpPage } from './pages/LoginSignUp'
import { OpenLayout } from './shared/components/OpenLayout'
import { ProtectedLayout } from './shared/components/ProtectedLayout'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { IconX } from '@tabler/icons-react'

export type QueryClientType = typeof queryClient

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (error) {
        //@ts-ignore
        const errMsg = (query?.state?.error?.message as string) || ''

        notifications.show({
          color: 'red',
          title: 'Default notification',
          message: errMsg.slice(0, 250),
          icon: <IconX />,
          autoClose: 5000,
        })
      }
    },
  }),

  mutationCache: new MutationCache({
    onError: error => {
      if (error) {
        notifications.show({
          color: 'red',
          title: 'Default notification',
          message: JSON.stringify(error).slice(0, 250),
          icon: <IconX />,
        })
      }
    },
  }),
})

export const App = () => {
  const paths = {
    contents: '/contents',
    loginSignUp: '/loginSignUp',
  }

  const router = createBrowserRouter([
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

  return (
    <>
      <RouterProvider router={router} />

      <Notifications />
    </>
  )
}
