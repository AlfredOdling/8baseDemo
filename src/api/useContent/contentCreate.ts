import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useContentCreate = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['content'],

    mutationFn: async () => {
      const mutation = gql`
        mutation ContentCreate($data: ContentCreateInput!) {
          contentCreate(data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: {
          user: {
            connect: {
              email: 'alfredodling@gmail.com',
            },
          },
        },
      })

      return res
    },

    onSuccess: (data: any, variables, ctx) => {
      navigate(data?.contentCreate.id)
    },
  })
}
