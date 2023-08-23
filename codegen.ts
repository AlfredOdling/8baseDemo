import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://uk.api.8base.com/cl1bujdae06nb09mhasqg4we4': {
        commentDescriptions: true,
      }
    }
  ],
  generates: {
    'src/api/types/schemaTypes.ts': {
      plugins: ['typescript','schema-ast'],
      config: {
        typesSuffix: '_',
      },
    },
  },
}

export default config
