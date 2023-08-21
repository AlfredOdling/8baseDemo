import { Stack, Grid, Typography } from '@mui/joy'
import { LiaPlusSolid, LiaSpinnerSolid } from 'react-icons/lia'

import { Prompt } from './Prompt'
import { usePromptCreate } from '../../../api/usePrompts/promptCreate'
import { usePromptsList } from '../../../api/usePrompts/promptList'
import { IconButton } from '../../../shared/components/IconButton'
import { useAuth0 } from '@auth0/auth0-react'

export const Prompts = ({ selectValue, textValue, urlValue }: any) => {
  const promptCreate = usePromptCreate()
  const promptsList = usePromptsList()
  const { user } = useAuth0()

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

      <Grid container width={'100%'} spacing={2} sx={{ flexGrow: 1 }}>
        {promptsList.data?.map((item: any) => (
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
