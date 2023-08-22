import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import './index.css'
import '@fontsource/inter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainLayout } from './shared/components/Layout'
import { ProtectedRoute } from './shared/auth'
import { ContentsPage } from './pages/Contents'
import { ContentPage } from './pages/Content'
import { LoginSignUpPage } from './pages/LoginSignUp'

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
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute component={ContentsPage} />,
      },
      {
        path: ':contentId',
        element: <ProtectedRoute component={ContentPage} />,
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
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
