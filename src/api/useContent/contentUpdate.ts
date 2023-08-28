import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { queryClient } from '../../App'

export const useContentUpdate = () => {
  return useMutation({
    mutationKey: ['content'],

    mutationFn: async (payload: any) => {
      const mutation = gql`
        mutation ContentUpdate($data: ContentUpdateInput!) {
          contentUpdate(data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: {
          id: payload.id,
          url: payload.url,
        },
      })
      return res
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['content', variables.contentId],
      })
    },
  })
}
