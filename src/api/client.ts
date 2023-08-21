import { GraphQLClient } from 'graphql-request'

export const client8Base = new GraphQLClient(
  'https://uk.api.8base.com/cl1bujdae06nb09mhasqg4we4',
  {
    headers: {
      authorization: `Bearer ${'6efa64ce-8c8c-432e-b54f-a80dc6e2dd08'}`,
      //environment: Env.EIGHTBASE_ENVIRONMENT,
    },
  }
)
