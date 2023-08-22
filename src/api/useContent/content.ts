import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'

export const useContent = (contentId: string) =>
  useQuery({
    queryKey: ['content'],

    queryFn: async () => {
      const query = gql`
        query Content($id: ID) {
          content(id: $id) {
            id
            title
            url
            contentText {
              items {
                id
                text
                prompt
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
