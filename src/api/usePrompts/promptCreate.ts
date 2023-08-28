import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { useAuth0 } from '@auth0/auth0-react'

import { client8Base } from '../client'
import { queryClient } from '../../App'

export const usePromptCreate = () => {
  const { user } = useAuth0()

  return useMutation({
    mutationKey: ['prompt'],

    mutationFn: async (data: any) => {
      const mutation = gql`
        mutation PromptCreate($data: PromptCreateInput!) {
          promptCreate(data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: {
          ...data,
          user: {
            connect: {
              email: user?.email,
            },
          },
        },
      })

      return res
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prompt'] })
    },
  })
}
