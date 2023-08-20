import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useContentsList = () =>
  useQuery({
    queryKey: ['content'],

    queryFn: async () => {
      const query = gql`
        query contentsList {
          contentsList {
            items {
              id
              title
            }
          }
        }
      `
      const res = client8Base.request(query)
      return res
    },

    select: (data: any) => data?.contentsList?.items,
  })
