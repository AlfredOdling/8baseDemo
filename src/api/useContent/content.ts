import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from '../client'
import { Content_ } from '../schemaTypes'

export const useContent = (contentId: string) =>
  useQuery({
    queryKey: ['content', contentId],

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
                updatedAt
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

    select: (data: any) => data?.content as Content_,
  })
