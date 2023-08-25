import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LiaLockSolid, LiaSpinnerSolid, LiaUnlockSolid } from 'react-icons/lia'
import { useMediaQuery } from 'react-responsive'
import { Group, TextInput, Select, Stack, Textarea, Title } from '@mantine/core'

import { Prompts } from './components/Prompts'
import { useContent } from '../../api/useContent/content'
import { neumorph } from '../../shared/styles'
import { useContentUpdate } from '../../api/useContent/contentUpdate'
import { Content } from './components/Content'
import { usePromptsList } from '../../api/usePrompts/promptList'
import { ActionIcon } from '../../shared/components/ActionIcon'

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
      spacing={20}
      sx={{
        ...neumorph,
        width: '90%',
        maxWidth: '800px',
        alignItems: 'flex-start',
        padding: 25,
      }}
    >
      <Title order={4}>{content.data?.title || 'Untitled'}</Title>

      <Group
        spacing={15}
        align={'flex-start'}
        sx={{
          width: '100%',
        }}
      >
        {selectValue === 'text' ? (
          <Textarea
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
            sx={{
              width: '100%',
              backgroundColor: 'transparent',
              color: 'white',
            }}
          />
        ) : (
          <TextInput
            sx={{
              width: isMobile ? '800px' : '600px',
            }}
            value={urlValue}
            onChange={e => setUrlValue(e.target.value)}
            placeholder="Add your URL here"
            disabled={lock}
          />
        )}

        <Select
          value={selectValue}
          onChange={setSelectValue}
          sx={{
            width: isMobile ? '200px' : '140px',
          }}
          data={[
            { value: 'website', label: 'Website' },
            { value: 'youtube', label: 'YouTube' },
          ]}
        />

        <ActionIcon
          variant="solid"
          size="lg"
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
        </ActionIcon>
      </Group>

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
