import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'

import './index.css'
import '@fontsource/inter'
import reportWebVitals from './reportWebVitals'
import { ProtectedRoute } from './shared/auth'
import { ContentsPage } from './pages/Contents'
import { ContentPage } from './pages/Content'
import { LoginSignUpPage } from './pages/LoginSignUp'
import { OpenLayout } from './shared/components/OpenLayout'
import { ProtectedLayout } from './shared/components/ProtectedLayout'
import { neumorphButton, neumorphIconButton } from './shared/styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
export const queryClient = new QueryClient()
export type QueryClientType = typeof queryClient

export const paths = {
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

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          components: {
            Title: {
              styles: {
                root: {
                  color: 'white',
                },
              },
            },
            Text: {
              styles: {
                root: {
                  color: 'white',
                },
              },
            },
            Button: {
              styles: {
                root: {
                  ...neumorphButton,
                  '&:hover': {
                    transform: 'scale(0.97)',
                    backgroundPosition: '100% 0',
                    transition: 'all .35s ease-in-out',
                  },
                  '&:active': {
                    transform: 'scale(0.93)',
                  },
                },
              },
            },
            ActionIcon: {
              styles: {
                root: {
                  ...neumorphIconButton,
                  border: 'none',
                  '&:hover': {
                    transform: 'scale(0.95)',
                    backgroundPosition: '100% 0',
                    transition: 'all .35s ease-in-out',
                  },
                  '&:active': {
                    transform: 'scale(0.91)',
                  },
                  '&:disabled': {
                    background: 'transparent',
                  },
                },
              },
            },
            Divider: {
              defaultProps: {
                color: '#868e9633',
              },
            },
            Select: {
              styles: {
                root: {
                  '& .mantine-Select-input': {
                    ...neumorphButton,
                    color: 'white',
                    border: 'none',

                    '&:hover': {
                      transform: 'scale(0.97)',
                      backgroundPosition: '100% 0',
                      transition: 'all .35s ease-in-out',
                    },

                    '&:active': {
                      transform: 'scale(0.93)',
                    },
                  },

                  '.mantine-Select-dropdown': {
                    border: 'none',
                    background:
                      'linear-gradient(45deg,rgb(22, 21, 31, 1) 0%,rgb(22, 21, 31) 35%,rgb(0, 156, 188) 100%) no-repeat center center fixed',
                  },

                  '.mantine-Select-item': {
                    color: 'white',
                    background: '#0D3D4C !important',

                    '&[data-selected]': {
                      background: '#1ba5d0 !important',
                    },

                    '&:hover': {
                      background: '#187e9e !important',
                      transform: 'scale(0.97)',
                      backgroundPosition: '100% 0',
                      transition: 'all .35s ease-in-out',
                    },

                    '&:active': {
                      transform: 'scale(0.93)',
                    },
                  },
                },
              },
            },
            TextInput: {
              styles: {
                root: {
                  '.mantine-TextInput-input': {
                    border: 'none',
                    color: 'white',
                    background: 'transparent',
                    boxShadow:
                      'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',

                    '&:disabled': {
                      background: 'transparent',
                    },
                  },
                },
              },
            },
          },
        }}
      >
        <RouterProvider router={router} />
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
