import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { useAuth0 } from '@auth0/auth0-react'

export const useUpdateUser = () => {
  const { user } = useAuth0()

  return useMutation({
    mutationKey: ['user'],

    mutationFn: async (data_: any) => {
      const mutation = gql`
        mutation UpdateUser($filter: UserKeyFilter, $data: UserUpdateInput!) {
          userUpdate(filter: $filter, data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: data_,
        filter: {
          email: user?.email,
        },
      })

      return res
    },
  })
}
