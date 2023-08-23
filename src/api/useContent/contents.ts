import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { useAuth0 } from '@auth0/auth0-react'
import { ContentListResponse_ } from '../schemaTypes'

export const useContents = () => {
  const { user } = useAuth0()

  return useQuery({
    queryKey: ['contentsList'],

    queryFn: async () => {
      const query = gql`
        query contentsList($filter: ContentFilter) {
          contentsList(filter: $filter) {
            items {
              id
              title
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
      data?.contentsList?.items as ContentListResponse_['items'],
  })
}
