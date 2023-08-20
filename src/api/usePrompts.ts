import { useMutation, useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { client8Base } from './client'

export function usePrompts() {
  const promptCreate = useMutation({
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

      return res
    },
  })

  const promptDelete = useMutation({
    mutationKey: ['prompts'],

    mutationFn: async (data_: any) => {
      const mutation = gql`
        mutation PromptDelete($data: PromptDeleteInput!) {
          promptDelete(data: $data) {
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

  const promptsList = useQuery({
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

  return { promptCreate, promptsList, promptDelete }
}
