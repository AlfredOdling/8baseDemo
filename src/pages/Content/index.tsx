import { useState } from 'react'
import { motion } from 'framer-motion'

import { LiaLockSolid, LiaUnlockSolid } from 'react-icons/lia'
import {
  Button,
  Stack,
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from '@mui/joy'

import { Prompts } from './Prompts'
import { usePersistState } from '../../shared/hooks'
import { useContentTextDelete } from '../../api/useContent/contentTextDelete'
import { useParams } from 'react-router-dom'
import { useContent } from '../../api/useContent/content'

export function Content() {
  const [lock, setLock] = usePersistState('lock', false)
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [textValue, setTextValue] = useState('')
  const [urlValue, setUrlValue] = useState(
    'https://docs.8base.com/projects/frontend/getting-started-introduction'
  )

  const { contentId } = useParams()
  const content = useContent(contentId!)
  const contentTextDelete = useContentTextDelete()

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
        <Typography level="h4">{content.data?.title || 'Untitled'}</Typography>

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

        <Prompts
          selectValue={selectValue}
          urlValue={urlValue}
          textValue={textValue}
        />

        <Typography level="h4">Content</Typography>

        {content.data?.isLoading ? (
          <Typography level="h3">Loading...</Typography>
        ) : (
          content.data?.contentText?.items?.map((item: any) => (
            <Stack direction={'row'} spacing={2} key={`${item.id}-content`}>
              <Button>{item.text}</Button>

              <Button
                loading={contentTextDelete.isLoading}
                onClick={() => contentTextDelete.mutate(item.id)}
              >
                Delete
              </Button>
            </Stack>
          ))
        )}
      </Stack>
    </motion.div>
  )
}
