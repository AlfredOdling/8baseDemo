import { Stack, Grid, IconButton, Typography } from '@mui/joy'
import { LiaPlusSolid, LiaSpinnerSolid } from 'react-icons/lia'

import { usePrompts } from '../../api/usePrompts'
import { Prompt } from './Prompt'

export const Prompts = ({ selectValue, textValue, urlValue }: any) => {
  const { promptCreate, promptsList } = usePrompts()

  return (
    <>
      <Stack width={'100%'} direction={'row'} spacing={2}>
        <Typography level="h4">Prompts</Typography>

        <IconButton
          variant="solid"
          size="sm"
          onClick={() =>
            promptCreate.mutate({
              user: {
                connect: {
                  email: 'alfredodling@gmail.com',
                },
              },
            })
          }
        >
          {promptCreate.isLoading ? <LiaSpinnerSolid /> : <LiaPlusSolid />}
        </IconButton>
      </Stack>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {promptsList.data?.map((item: any) => (
          <Prompt
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
