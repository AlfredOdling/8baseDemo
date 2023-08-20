import { useState } from 'react'
import { motion } from 'framer-motion'

import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import {
  Grid,
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from '@mui/joy'
import {
  LiaLockSolid,
  LiaPenSolid,
  LiaPlusSolid,
  LiaSpinnerSolid,
  LiaTrashSolid,
  LiaUnlockSolid,
} from 'react-icons/lia'

import { usePersistState } from '../../shared/hooks'
import { useParams } from 'react-router-dom'
import { usePrompts } from '../../api/usePrompts'
import { useContent } from '../../api/useContent'

export function NewContent() {
  const [lock, setLock] = usePersistState('lock', false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [urlValue, setUrlValue] = useState(
    'https://docs.8base.com/projects/frontend/getting-started-introduction'
  )
  const [textValue, setTextValue] = useState('')

  let { contentId } = useParams()
  const { promptCreate, promptsList, promptDelete } = usePrompts()
  const { contentTexts, generateContentText } = useContent(contentId)

  return (
    <motion.div
      animate={{ background: '#FCFCFC' }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack
        width={'800px'}
        alignItems={'flex-start'}
        borderRadius={6}
        sx={{
          p: 3,
          background: 'white',
          boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        }}
        spacing={3}
      >
        <Typography level="h4">{'content.data.title'}</Typography>

        <Stack direction={'row'} spacing={1}>
          {selectValue === 'text' ? (
            <Textarea
              value={textValue}
              onChange={e => setTextValue(e.target.value)}
              minRows={4}
            />
          ) : (
            <Input
              disabled={!!lock}
              value={urlValue}
              onChange={e => setUrlValue(e.target.value)}
            />
          )}

          <Select
            value={selectValue}
            onChange={(_, val) => setSelectValue(val)}
          >
            <Option value="website">Website</Option>
            <Option value="youtube">YouTube</Option>
            <Option value="text">Text</Option>
          </Select>

          <IconButton variant="solid" size="sm" onClick={() => setLock(!lock)}>
            {lock ? <LiaLockSolid /> : <LiaUnlockSolid />}
          </IconButton>
        </Stack>

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
            <Grid xs={4}>
              <Stack
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                bgcolor={'lightgrey'}
                height={'110px'}
                p={1.5}
                borderRadius={6}
              >
                <Typography>{item.prompt}</Typography>

                <Stack direction={'row'} spacing={1}>
                  <Button
                    key={item.id}
                    loading={generateContentText.isLoading}
                    onClick={() =>
                      generateContentText.mutate({
                        type: selectValue,
                        url: urlValue,
                        text: textValue,
                        prompt: item.prompt,
                      })
                    }
                  >
                    Generate
                  </Button>

                  <IconButton
                    variant="solid"
                    size="sm"
                    onClick={() => setModalOpen(!modalOpen)}
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
                    {promptDelete.isLoading ? (
                      <LiaSpinnerSolid />
                    ) : (
                      <LiaTrashSolid />
                    )}
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Typography level="h4">Content</Typography>

        {contentTexts.isLoading ? (
          <Typography level="h3">Loading...</Typography>
        ) : (
          contentTexts.data.map((item: any) => (
            <Button key={item.id}>{item.text}</Button>
          ))
        )}
      </Stack>
    </motion.div>
  )
}
