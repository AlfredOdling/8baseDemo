import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useContentTexts = () =>
  useQuery({
    queryKey: ['contentTexts'],

    queryFn: async (data_: any) => {
      const query = gql`
        query ContentTextsList {
          contentTextsList {
            items {
              id
            }
          }
        }
      `
      const res = client8Base.request(query)
      return res
    },

    select: (data: any) => data?.contentTextsList?.items,
  })
