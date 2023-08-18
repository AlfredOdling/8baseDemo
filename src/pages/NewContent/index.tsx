import { useState } from 'react'
import { motion } from 'framer-motion'

import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import {
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from '@mui/joy'
import { LiaLockSolid, LiaPenSolid, LiaUnlockSolid } from 'react-icons/lia'

import { useGenerateText, usePrompts } from '../../shared/api'
import BasicModal from './Modal'
import { usePersistState } from '../../shared/hooks'

export function NewContent() {
  const [lock, setLock] = usePersistState('lock', false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [urlValue, setUrlValue] = useState(
    'https://docs.8base.com/projects/frontend/getting-started-introduction'
  )
  const [textValue, setTextValue] = useState('')

  const { mutation, query } = useGenerateText()
  const usePrompts_ = usePrompts()

  // const _10WordSummary = query.data?.filter(
  //   (item: any) => item.summaryType === '10word'
  // )[0]
  // const _50WordSummary = query.data?.filter(
  //   (item: any) => item.summaryType === '50word'
  // )[0]

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
        height={'600px'}
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
        <Typography level="h4">
          {mutation.data?.data.title.output_text || 'Untitled'}
        </Typography>

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
          <Typography level="h4">
            {mutation.data?.data.title.output_text || 'Untitled'}
          </Typography>

          <IconButton
            variant="solid"
            size="sm"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <LiaPenSolid />
          </IconButton>
        </Stack>

        {usePrompts_.query.data?.map((item: any) => {
          console.log('🚀  item:', item)

          return (
            <>
              <Button
                key={item.id}
                loading={mutation.isLoading}
                onClick={() =>
                  mutation.mutate({
                    summaryType: '50word',
                    type: selectValue,
                    url: urlValue,
                    text: textValue,
                    prompt: 'Write a 10 word summary',
                  })
                }
              >
                {item.prompt}
              </Button>
            </>
          )
        })}
      </Stack>

      <BasicModal open={modalOpen} setOpen={setModalOpen} />
    </motion.div>
  )
}
