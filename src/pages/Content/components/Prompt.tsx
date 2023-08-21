import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Stack, Grid, Typography, Textarea, Divider } from '@mui/joy'
import {
  LiaMarkerSolid,
  LiaPenSolid,
  LiaSaveSolid,
  LiaSpinnerSolid,
  LiaTrashSolid,
} from 'react-icons/lia'

import { usePromptDelete } from '../../../api/usePrompts/promptDelete'
import { usePromptUpdate } from '../../../api/usePrompts/promptUpdate'
import { useContentTextCreate } from '../../../api/useContent/contentTextCreate'
import { neumorph } from '../../../shared/styles'
import { Button } from '../../../shared/components/Button'
import { IconButton } from '../../../shared/components/IconButton'

export const Prompt = ({ item, selectValue, urlValue, textValue }: any) => {
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState(item.prompt)
  const { contentId } = useParams()

  const promptDelete = usePromptDelete()
  const promptUpdate = usePromptUpdate()
  const contentUpdate = useContentTextCreate()

  return (
    <Grid xs={12} md={4}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Stack
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          height={'150px'}
          p={1.5}
          borderRadius={6}
          sx={{
            ...neumorph,
          }}
        >
          {edit ? (
            <Textarea
              sx={{
                width: '100%',
                backgroundColor: 'transparent',
                color: 'white',
              }}
              maxRows={3}
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          ) : (
            <Typography textColor={'white'}>{item.prompt}</Typography>
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
              endDecorator={<LiaMarkerSolid />}
            >
              Generate
            </Button>

            <IconButton
              variant="solid"
              size="sm"
              onClick={() => setEdit(!edit)}
            >
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
                  promptUpdate
                    .mutateAsync({
                      id: item.id,
                      prompt: input,
                      user: {
                        connect: {
                          email: 'alfredodling@gmail.com',
                        },
                      },
                    })
                    .then(() => {
                      setEdit(false)
                      promptUpdate.reset()
                    })
                }
              >
                {promptUpdate.isLoading ? (
                  <LiaSpinnerSolid />
                ) : (
                  <LiaSaveSolid color="yellow" />
                )}
              </IconButton>
            )}
          </Stack>
        </Stack>
      </motion.div>
    </Grid>
  )
}
