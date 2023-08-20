import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import axios from 'axios'

import { client8Base } from '../client'
import { queryClient } from '../..'

export const useContentTextCreate = () =>
  useMutation({
    mutationKey: ['content'],

    mutationFn: (payload: any) => {
      return axios.post(
        `https://web-production-4490c.up.railway.app/generateText/${payload.type}`,
        {
          url: payload.url,
          text: payload.text,
          prompt: payload.prompt,
        }
      )
    },

    onSuccess: (data, variables) => {
      const mutation = gql`
        mutation ContentUpdate($data: ContentUpdateInput!) {
          contentUpdate(data: $data) {
            id
          }
        }
      `

      client8Base
        .request(mutation, {
          data: {
            id: variables.contentId,
            title: data.data.title.output_text,
            user: {
              connect: {
                email: 'alfredodling@gmail.com',
              },
            },
            contentText: {
              create: {
                text: data.data.content.output_text,
              },
            },
          },
        })
        .then(() => {
          console.log('success')

          queryClient.invalidateQueries({ queryKey: ['content'] })
        })
    },
  })
