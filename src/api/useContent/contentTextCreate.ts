import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import axios from 'axios'

import { client8Base } from '../client'
import { useAuth0 } from '@auth0/auth0-react'
import { queryClient } from '../../App'

export const useContentTextCreate = () => {
  const { user } = useAuth0()

  return useMutation({
    mutationKey: ['content'],

    mutationFn: (payload: any) => {
      return axios.post(
        `https://web-production-4490c.up.railway.app/generateText/${payload.type}`,
        {
          url: payload.url,
          prompt: payload.prompt,
        }
      )
    },

    onSuccess: (data, variables) => {
      const mutation = gql`
        mutation ContentUpdateText($data: ContentUpdateInput!) {
          contentUpdate(data: $data) {
            id
          }
        }
      `

      client8Base
        .request(mutation, {
          data: {
            id: variables.contentId,
            user: {
              connect: {
                email: user?.email,
              },
            },
            title: data.data.title.output_text,
            url: data.data.url,
            contentText: {
              create: {
                text: data.data.content.output_text,
                prompt: variables.prompt,
              },
            },
          },
        })
        .then(() => {
          queryClient.invalidateQueries({
            queryKey: ['content', variables.contentId],
          })
        })
    },
  })
}
