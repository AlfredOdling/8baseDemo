import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { queryClient } from '../../App'

export const usePromptUpdate = () =>
  useMutation({
    mutationKey: ['prompt'],

    mutationFn: async (data: any) => {
      const mutation = gql`
        mutation PromptUpdate($data: PromptUpdateInput!) {
          promptUpdate(data: $data) {
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
