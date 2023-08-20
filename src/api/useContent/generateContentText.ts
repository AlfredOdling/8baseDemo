import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import axios from 'axios'

import { client8Base } from '../client'
import { queryClient } from '../..'

export const useGenerateContentText = () =>
  useMutation({
    mutationKey: ['generateContentText'],

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

    onSuccess: data => {
      const mutation = gql`
        mutation GenerateContentText($data: ContentCreateInput!) {
          contentCreate(data: $data) {
            id
          }
        }
      `
      client8Base
        .request(mutation, {
          data: {
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
          queryClient.invalidateQueries({ queryKey: ['contents'] })
        })
    },
  })
