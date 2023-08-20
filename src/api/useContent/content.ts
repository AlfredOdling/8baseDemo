import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useContent_ = (contentId: string) =>
  useQuery({
    queryKey: ['content'],

    queryFn: async () => {
      const query = gql`
        query Content($id: ID) {
          content(id: $id) {
            id
            title
            contentText {
              items {
                text
              }
            }
          }
        }
      `

      const res = client8Base.request(query, {
        id: contentId,
      })
      return res
    },

    select: (data: any) => data?.content,
  })
