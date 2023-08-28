import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'

import { Button, Grid, Group, Stack, Text, Textarea } from '@mantine/core'
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
import { neumorph } from '../../../shared/styles/styles'
import { ActionIcon } from '../../../shared/components/ActionIcon'

export const Prompt = ({ item, selectValue, urlValue }: any) => {
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState(item.prompt)
  const { contentId } = useParams()
  const { user } = useAuth0()

  const promptDelete = usePromptDelete()
  const promptUpdate = usePromptUpdate()
  const contentUpdate = useContentTextCreate()

  return (
    <Grid.Col xs={12} md={6}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Stack
          align={'flex-start'}
          justify={'space-between'}
          sx={{
            ...neumorph,
            borderRadius: 6,
            height: '150px',
            padding: 15,
          }}
        >
          {edit ? (
            <Textarea
              sx={{
                width: '100%',
                backgroundColor: 'transparent',
                color: 'white',
              }}
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          ) : (
            <Text lineClamp={3}>{item.prompt}</Text>
          )}

          <Group spacing={8}>
            <Button
              key={item.id}
              loading={contentUpdate.isLoading}
              onClick={() =>
                contentUpdate.mutate({
                  contentId: contentId,
                  type: selectValue,
                  url: urlValue,
                  prompt: item.prompt,
                })
              }
              leftIcon={<LiaMarkerSolid />}
            >
              Generate
            </Button>

            <ActionIcon
              variant="solid"
              size="lg"
              onClick={() => setEdit(!edit)}
            >
              <LiaPenSolid />
            </ActionIcon>

            <ActionIcon
              variant="solid"
              size="lg"
              onClick={() =>
                promptDelete.mutate({
                  id: item.id,
                })
              }
            >
              {promptDelete.isLoading ? <LiaSpinnerSolid /> : <LiaTrashSolid />}
            </ActionIcon>

            {edit && (
              <ActionIcon
                variant="solid"
                pulsate
                onClick={() =>
                  promptUpdate
                    .mutateAsync({
                      id: item.id,
                      prompt: input,
                      user: {
                        connect: {
                          email: user?.email,
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
                  <LiaSaveSolid />
                )}
              </ActionIcon>
            )}
          </Group>
        </Stack>
      </motion.div>
    </Grid.Col>
  )
}
