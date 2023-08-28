import { RouterProvider } from 'react-router-dom'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { Notifications, notifications } from '@mantine/notifications'
import { IconX } from '@tabler/icons-react'

import { router } from './routes'

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
          autoClose: 40000,
          closeButtonProps: {
            sx: {
              all: 'inherit',
            },
          },
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
          closeButtonProps: {
            sx: {
              all: 'inherit',
            },
          },
        })
      }
    },
  }),
})

export type QueryClientType = typeof queryClient

export const App = () => (
  <>
    <RouterProvider router={router} />
    <Notifications />
  </>
)
