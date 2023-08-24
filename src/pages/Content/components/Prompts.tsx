import { useAuth0 } from '@auth0/auth0-react'
import { LiaPlusSolid, LiaSpinnerSolid } from 'react-icons/lia'

import { Prompt } from './Prompt'
import { usePromptCreate } from '../../../api/usePrompts/promptCreate'
import { usePromptsList } from '../../../api/usePrompts/promptList'
import {
  Grid,
  Stack,
  Typography,
  IconButton,
} from '../../../shared/components/base'

export const Prompts = ({ selectValue, textValue, urlValue }: any) => {
  const promptCreate = usePromptCreate()
  const promptsList = usePromptsList()
  const { user } = useAuth0()

  const sortedcreatedAt = promptsList?.data?.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  if (promptsList.isLoading) {
    return <LiaSpinnerSolid color="white" />
  }

  return (
    <>
      <Stack width={'100%'} direction={'row'} spacing={2}>
        <Typography textColor={'white'} level="h4">
          Prompts
        </Typography>

        <IconButton
          variant="solid"
          size="sm"
          onClick={() =>
            promptCreate.mutate({
              user: {
                connect: {
                  email: user?.email,
                },
              },
            })
          }
        >
          {promptCreate.isLoading ? <LiaSpinnerSolid /> : <LiaPlusSolid />}
        </IconButton>
      </Stack>

      <Grid
        container
        width={'100%'}
        spacing={2}
        sx={{
          flexGrow: 1,
          padding: 1,
          maxHeight: '400px',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow:
            'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',
        }}
      >
        {sortedcreatedAt?.map((item: any) => (
          <Prompt
            key={`${item.id}-promt`}
            item={item}
            selectValue={selectValue}
            urlValue={urlValue}
            textValue={textValue}
          />
        ))}
      </Grid>
    </>
  )
}
