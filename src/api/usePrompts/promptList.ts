import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { useAuth0 } from '@auth0/auth0-react'

import { client8Base } from '../client'
import { PromptListResponse_ } from '../schemaTypes'

export const usePromptsList = () => {
  const { user } = useAuth0()

  return useQuery({
    queryKey: ['prompt'],

    queryFn: async () => {
      const query = gql`
        query promptsList($filter: PromptFilter) {
          promptsList(filter: $filter) {
            items {
              createdAt
              prompt
              id
            }
          }
        }
      `

      const res = client8Base.request(query, {
        filter: {
          user: {
            some: {
              email: {
                equals: user?.email,
              },
            },
          },
        },
      })
      return res
    },

    select: (data: any) =>
      data?.promptsList?.items as PromptListResponse_['items'],
  })
}
