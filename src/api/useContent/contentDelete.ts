import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { queryClient } from '../../App'

export const useContentDelete = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['content'],

    mutationFn: async (payload: any) => {
      const mutation = gql`
        mutation ContentDelete($data: ContentDeleteInput!) {
          contentDelete(data: $data) {
            success
          }
        }
      `

      const res = client8Base.request(mutation, {
        force: true,
        data: {
          id: payload,
        },
      })

      return res
    },

    onSuccess: (data: any) => {
      navigate(data?.contentDelete.id)
      queryClient.invalidateQueries({ queryKey: ['contentsList'] })
    },
  })
}
