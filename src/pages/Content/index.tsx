import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  LiaInternetExplorer,
  LiaLockSolid,
  LiaSpinnerSolid,
  LiaUnlockSolid,
  LiaYoutube,
} from 'react-icons/lia'
import { Group, TextInput, Stack, Title } from '@mantine/core'

import { Prompts } from './components/Prompts'
import { useContent } from '../../api/useContent/content'
import { neumorph } from '../../shared/styles/styles'
import { useContentUpdate } from '../../api/useContent/contentUpdate'
import { Content } from './components/Content'
import { usePromptsList } from '../../api/usePrompts/promptList'
import { ActionIcon } from '../../shared/components/ActionIcon'

export function ContentPage() {
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const { contentId } = useParams()
  const contentUpdate = useContentUpdate()
  const content = useContent(contentId!)
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

  const setValue = (value: string) => {
    setUrlValue(value)

    value.includes('youtube')
      ? setSelectValue('youtube')
      : setSelectValue('website')
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
        <TextInput
          sx={{
            flex: 'auto',
          }}
          value={urlValue}
          onChange={e => setValue(e.target.value)}
          placeholder="Add a website or YouTube link"
          disabled={lock}
          rightSection={
            selectValue === 'youtube' ? (
              <LiaYoutube color="white" />
            ) : (
              <LiaInternetExplorer color="white" />
            )
          }
        />

        <ActionIcon
          variant="solid"
          size="lg"
          onClick={() =>
            contentUpdate
              .mutateAsync({
                id: contentId,
                url: urlValue,
              })
              .then(() => {
                setLock(!lock)
              })
          }
          pulsate={!lock && Boolean(urlValue)}
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

      {urlValue && lock && (
        <>
          <Prompts selectValue={selectValue} urlValue={urlValue} />
          <Content content={content} />
        </>
      )}
    </Stack>
  )
}
