import { useState } from 'react'
import { motion } from 'framer-motion'

import { LiaSpinnerSolid, LiaTrashSolid } from 'react-icons/lia'
import {
  Stack,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
  Grid,
} from '@mui/joy'

import { Prompts } from './components/Prompts'
import { useContentTextDelete } from '../../api/useContent/contentTextDelete'
import { useParams } from 'react-router-dom'
import { useContent } from '../../api/useContent/content'
import { neumorph } from '../../shared/styles'
import { IconButton } from '../../shared/components/IconButton'

export function Content() {
  const [selectValue, setSelectValue] = useState<string | null>('website')
  const [textValue, setTextValue] = useState('')
  const [urlValue, setUrlValue] = useState(
    'https://docs.8base.com/projects/frontend/getting-started-introduction'
  )

  const { contentId } = useParams()
  const content = useContent(contentId!)
  const contentTextDelete = useContentTextDelete()

  return (
    <Stack
      width={'800px'}
      margin={'0 auto'}
      mt={3}
      alignItems={'flex-start'}
      borderRadius={6}
      sx={{
        p: 3,
        ...neumorph,
      }}
      spacing={3}
    >
      <Typography textColor={'white'} level="h4">
        Subject: {content.data?.title || 'Untitled'}
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
          />
        )}

        <Select
          value={selectValue}
          onChange={(_, val) => setSelectValue(val)}
          sx={{
            ...neumorph,
            width: '150px',
            color: 'white',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Option value="website">Website</Option>
          <Option value="youtube">YouTube</Option>
          <Option value="text">Text</Option>
        </Select>
      </Stack>

      <Prompts
        selectValue={selectValue}
        urlValue={urlValue}
        textValue={textValue}
      />

      <Typography textColor={'white'} level="h4">
        Content
      </Typography>

      {content.data?.isLoading ? (
        <Typography level="h3">Loading...</Typography>
      ) : (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {content.data?.contentText?.items?.map((item: any) => (
            <Grid xs={6} key={`${item.id}-content`}>
              <Stack
                spacing={2}
                key={`${item.id}-content`}
                height={'200px'}
                p={1.5}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
                sx={{
                  ...neumorph,
                }}
              >
                <Typography
                  textColor={'white'}
                  sx={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: '4',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  Prompt: {item.prompt}
                </Typography>

                <Typography
                  textColor={'white'}
                  sx={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: '4',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.text}
                </Typography>

                <IconButton
                  variant="solid"
                  size="sm"
                  onClick={() =>
                    contentTextDelete.mutate({
                      id: item.id,
                    })
                  }
                >
                  {contentTextDelete.isLoading ? (
                    <LiaSpinnerSolid />
                  ) : (
                    <LiaTrashSolid />
                  )}
                </IconButton>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  )
}
