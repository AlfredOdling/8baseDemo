import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useContentTextsList = () =>
  useQuery({
    queryKey: ['contentTextsList'],

    queryFn: async (data_: any) => {
      const query = gql`
        query ContentTextsList {
          contentTextsList {
            items {
              id
              text
            }
          }
        }
      `
      const res = client8Base.request(query)
      return res
    },

    select: (data: any) => data?.contentTextsList?.items,
  })
