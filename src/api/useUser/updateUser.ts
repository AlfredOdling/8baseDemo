import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useUpdateUser = () =>
  useMutation({
    mutationKey: ['user'],

    mutationFn: async (data_: any) => {
      const mutation = gql`
        mutation UpdateUser($data: UserUpdateInput!) {
          userUpdate(filter: { email: "alfredodling@gmail.com" }, data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: data_,
      })

      return res
    },
  })
