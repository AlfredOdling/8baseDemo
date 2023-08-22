import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { queryClient } from '../..'

export const usePromptCreate = () =>
  useMutation({
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
        data,
      })

      return res
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prompt'] })
    },
  })
