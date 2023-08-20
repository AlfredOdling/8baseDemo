import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Stack, Grid, IconButton, Typography, Textarea } from '@mui/joy'
import {
  LiaCheckSolid,
  LiaPenSolid,
  LiaSaveSolid,
  LiaSpinnerSolid,
  LiaTrashSolid,
} from 'react-icons/lia'

import { usePrompts } from '../../api/usePrompts'
import { useContent } from '../../api/useContent'

export const Prompt = ({ item, selectValue, urlValue, textValue }: any) => {
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState(item.prompt)

  const { contentId } = useParams()
  const { promptDelete, promptUpdate } = usePrompts()
  const { contentUpdate } = useContent(contentId)

  return (
    <Grid xs={4}>
      <Stack
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        bgcolor={'lightgrey'}
        height={'150px'}
        p={1.5}
        borderRadius={6}
      >
        {edit ? (
          <Textarea
            sx={{ width: '100%' }}
            maxRows={3}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        ) : (
          <Typography>{item.prompt}</Typography>
        )}

        <Stack direction={'row'} spacing={1}>
          <Button
            key={item.id}
            loading={contentUpdate.isLoading}
            onClick={() =>
              contentUpdate.mutate({
                contentId: contentId,
                type: selectValue,
                url: urlValue,
                text: textValue,
                prompt: item.prompt,
              })
            }
          >
            Generate
          </Button>

          <IconButton variant="solid" size="sm" onClick={() => setEdit(!edit)}>
            <LiaPenSolid />
          </IconButton>

          <IconButton
            variant="solid"
            size="sm"
            onClick={() =>
              promptDelete.mutate({
                id: item.id,
              })
            }
          >
            {promptDelete.isLoading ? <LiaSpinnerSolid /> : <LiaTrashSolid />}
          </IconButton>

          {edit && (
            <IconButton
              variant="solid"
              size="sm"
              onClick={() =>
                promptUpdate.mutate({
                  id: item.id,
                  prompt: input,
                  user: {
                    connect: {
                      email: 'alfredodling@gmail.com',
                    },
                  },
                })
              }
            >
              {promptUpdate.isLoading ? (
                <LiaSpinnerSolid />
              ) : promptUpdate.isSuccess ? (
                <LiaCheckSolid />
              ) : (
                <LiaSaveSolid />
              )}
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Grid>
  )
}
