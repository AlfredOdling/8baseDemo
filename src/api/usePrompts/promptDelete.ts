import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { queryClient } from '../../App'

export const usePromptDelete = () =>
  useMutation({
    mutationKey: ['prompt'],

    mutationFn: async (data: any) => {
      const mutation = gql`
        mutation PromptDelete($data: PromptDeleteInput!) {
          promptDelete(data: $data) {
            success
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
