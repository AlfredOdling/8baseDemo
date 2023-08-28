import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { queryClient } from '../../App'

export const useContentTextDelete = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['content'],

    mutationFn: async (payload: any) => {
      const mutation = gql`
        mutation ContentTextDelete($data: ContentTextDeleteInput!) {
          contentTextDelete(data: $data) {
            success
          }
        }
      `

      const res = client8Base.request(mutation, {
        force: true,
        data: {
          id: payload.id,
        },
      })

      return res
    },

    onSuccess: (data: any, variables, ctx) => {
      navigate(data?.contentTextDelete.id)
      queryClient.invalidateQueries({
        queryKey: ['content'],
      })
    },
  })
}
