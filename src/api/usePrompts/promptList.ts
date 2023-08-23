import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const usePromptsList = () =>
  useQuery({
    queryKey: ['prompt'],

    queryFn: async () => {
      const query = gql`
        query promptsList {
          promptsList {
            items {
              updatedAt
              prompt
              id
            }
          }
        }
      `

      const res = client8Base.request(query)
      return res
    },

    select: (data: any) => data?.promptsList?.items,
  })
