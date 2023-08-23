import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { gql } from 'graphql-request'
import { useAuth0 } from '@auth0/auth0-react'

import { client8Base } from '../client'

export const useContentCreate = () => {
  const navigate = useNavigate()
  const { user } = useAuth0()

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
              email: user?.email,
            },
          },
        },
      })
      return res
    },

    onSuccess: (data: any) => {
      navigate(data?.contentCreate.id)
    },
  })
}
