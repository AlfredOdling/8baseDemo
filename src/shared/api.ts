import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { gql, GraphQLClient } from 'graphql-request'
import { queryClient } from '..'

export const client8Base = new GraphQLClient(
  'https://uk.api.8base.com/cl1bujdae06nb09mhasqg4we4',
  {
    headers: {
      authorization: `Bearer ${'6efa64ce-8c8c-432e-b54f-a80dc6e2dd08'}`,
      //environment: Env.EIGHTBASE_ENVIRONMENT,
    },
  }
)

export function useUser() {
  const mutation = useMutation({
    mutationKey: ['user'],

    mutationFn: async (data_: any) => {
      const mutation = gql`
        mutation UpdateUser($data: UserUpdateInput!) {
          userUpdate(filter: { email: "alfredodling@gmail.com" }, data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: data_,
      })

      return res
    },
  })

  return { mutation }
}

export function useGenerateText() {
  const mutation = useMutation({
    mutationKey: ['generateText'],
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
    onSuccess: (data, variables, ctx) => {
      const mutation = gql`
        mutation GeneratedTextCreate($data: GeneratedTextCreateInput!) {
          generatedTextCreate(data: $data) {
            id
          }
        }
      `
      const res = client8Base.request(mutation, {
        data: {
          title: data.data.title.output_text,
          content: data.data.content.output_text,
          // summaryType: variables.summaryType,
          user: {
            connect: {
              email: 'alfredodling@gmail.com',
            },
          },
        },
      })

      res.then(() => {
        queryClient.invalidateQueries({ queryKey: ['generateText'] })
      })
    },
  })

  const query = useQuery({
    queryKey: ['generateText'],
    queryFn: async (data_: any) => {
      const query = gql`
        query generatedTextsList {
          generatedTextsList {
            items {
              id
              title
              content200Words
            }
          }
        }
      `
      const res = client8Base.request(query)
      return res
    },
    select: (data: any) => data?.generatedTextsList?.items,
  })

  return { mutation, query }
}

export function usePrompts() {
  const mutation = useMutation({
    mutationKey: ['prompts'],

    mutationFn: async (data_: any) => {
      const mutation = gql`
        mutation PromptCreate($data: PromptCreateInput!) {
          promptCreate(data: $data) {
            id
          }
        }
      `

      const res = client8Base.request(mutation, {
        data: data_,
      })

      // {
      //   promt: 'Some'
      //   user: {
      //     connect: {
      //       email: 'alfredodling@gmail.com'
      //     }
      //   }
      // }

      return res
    },
  })

  const query = useQuery({
    queryKey: ['prompts'],
    queryFn: async () => {
      const query = gql`
        query promptsList {
          promptsList {
            items {
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

  return { mutation, query }
}
