import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LiaLockSolid, LiaSpinnerSolid, LiaUnlockSolid } from 'react-icons/lia'
import { useMediaQuery } from 'react-responsive'

import { Prompts } from './components/Prompts'
import { useContent } from '../../api/useContent/content'
import { neumorph } from '../../shared/styles'
import { useContentUpdate } from '../../api/useContent/contentUpdate'
import { Content } from './components/Content'
import { usePromptsList } from '../../api/usePrompts/promptList'
import {
  Option,
  Select,
  Stack,
  Textarea,
  Typography,
  Input,
} from '../../shared/components/base'
import { IconButton } from '../../shared/components/base/IconButton'

export function ContentPage() {
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [textValue, setTextValue] = useState('')

  const { contentId } = useParams()
  const contentUpdate = useContentUpdate()
  const content = useContent(contentId!)
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  const [lock, setLock] = useState(false)
  const [urlValue, setUrlValue] = useState('')
  const promptsList = usePromptsList()

  useEffect(() => {
    setLock(!!content.data?.url)
    setUrlValue(content.data?.url || '')
  }, [content.data?.url])

  if (promptsList.isLoading) {
    return <LiaSpinnerSolid color="white" />
  }

  return (
    <Stack
      width={'90%'}
      maxWidth={'800px'}
      alignItems={'flex-start'}
      p={3}
      spacing={3}
      sx={{
        ...neumorph,
      }}
    >
      <Typography textColor={'white'} level="h4">
        {content.data?.title || 'Untitled'}
      </Typography>

      <Stack
        direction={'row'}
        spacing={1}
        alignItems={'flex-start'}
        width={'100%'}
      >
        {selectValue === 'text' ? (
          <Textarea
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            minRows={4}
            sx={{
              width: '100%',
              backgroundColor: 'transparent',
              color: 'white',
            }}
          />
        ) : (
          <Input
            sx={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              boxShadow:
                'inset 5px 5px 10px rgba(32, 31, 41, 0.2), inset -5px -5px 10px rgba(22, 21, 31, 0.3)',
            }}
            fullWidth
            value={urlValue}
            onChange={e => setUrlValue(e.target.value)}
            placeholder="Add your URL here"
            disabled={lock}
          />
        )}

        <Select
          value={selectValue}
          onChange={(_, val) => setSelectValue(val)}
          sx={{
            ...neumorph,
            width: isMobile ? '200px' : '140px',
            color: 'white',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '& .MuiSelect-indicator': {
              '--Icon-color': 'white',
            },
          }}
        >
          <Option value="website">Website</Option>
          <Option value="youtube">YouTube</Option>
          {/* <Option value="text">Text</Option> */}
        </Select>

        <IconButton
          variant="solid"
          onClick={() =>
            contentUpdate
              .mutateAsync({
                id: contentId,
                url: textValue || urlValue,
              })
              .then(() => {
                setLock(!lock)
              })
          }
          pulsate={!lock && (!!textValue || !!urlValue)}
        >
          {lock ? (
            <LiaLockSolid />
          ) : contentUpdate.isLoading ? (
            <LiaSpinnerSolid />
          ) : (
            <LiaUnlockSolid />
          )}
        </IconButton>
      </Stack>

      {textValue ||
        (urlValue && lock && (
          <>
            <Prompts
              selectValue={selectValue}
              urlValue={urlValue}
              textValue={textValue}
            />

            <Content content={content} />
          </>
        ))}
    </Stack>
  )
}
