import { useState } from 'react'
import { useParams } from 'react-router-dom'
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

import { usePersistState } from '../../shared/hooks'
import { useContent } from '../../api/useContent'
import { Prompts } from './Prompts'

export function Content() {
  const [lock, setLock] = usePersistState('lock', false)
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [urlValue, setUrlValue] = useState(
    'https://docs.8base.com/projects/frontend/getting-started-introduction'
  )
  const [textValue, setTextValue] = useState('')
  const { contentId } = useParams()
  const { contentTextsList } = useContent(contentId)

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

        <Prompts
          selectValue={selectValue}
          urlValue={urlValue}
          textValue={textValue}
        />

        <Typography level="h4">Content</Typography>

        {contentTextsList.isLoading ? (
          <Typography level="h3">Loading...</Typography>
        ) : (
          contentTextsList.data.map((item: any) => (
            <Button key={item.id}>{item.text}</Button>
          ))
        )}
      </Stack>
    </motion.div>
  )
}
